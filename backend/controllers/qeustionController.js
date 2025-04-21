// controllers/questionController.js
const Question = require("../models/Question");

exports.createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ message: "Error creating question", error: err.message });
  }
};

exports.getQuestionsBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const questions = await Question.find({ subject: subjectId });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching questions", error: err.message });
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
    res.status(500).json({ message: "Error filtering questions", error: err.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ message: "Error updating question", error: err.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    await Question.findByIdAndDelete(id);
    res.status(200).json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting question", error: err.message });
  }
};
