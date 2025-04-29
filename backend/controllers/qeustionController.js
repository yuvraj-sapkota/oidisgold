// controllers/questionController.js
const Question = require("../models/question");

exports.createQuestion = async (req, res) => {
  try {
    const { subject, year, season } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file upload" });
    }
    // const photoPath = req.file.path;

    const photoPath = `${req.protocol}://${req.get(
      "host"
    )}/${req.file.path.replace(/\\/g, "/")}`;

    const newQuestion = new Question({
      subject,
      year,
      season,
      image: photoPath,
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    console.log("Error while creting question", err);
    res
      .status(500)
      .json({ message: "Error creating question", error: err.message });
  }
};

exports.getQuestionsBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const questions = await Question.find({ subject: subjectId }).populate(
      "subject"
    );

    res.status(200).json(questions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching questions", error: err.message });
  }
};

exports.getQuestionsBySubjectAndFilter = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const { year, season } = req.query;

    const filters = { subject: subjectId };
    if (year) filters.year = year;
    if (season) filters.season = season;

    const questions = await Question.find(filters);
    res.status(200).json(questions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error filtering questions", error: err.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating question", error: err.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    await Question.findByIdAndDelete(id);
    res.status(200).json({ message: "Question deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting question", error: err.message });
  }
};
