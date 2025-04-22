// controllers/subjectController.js
const Subject = require("../models/Subject");

exports.createSubject = async (req, res) => {
  try {
    // const { name, semester } = req.body;
    // const newSubject = new Subject({name, semester});
    const newSubject = new Subject(req.body);
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating subject", error: err.message });
  }
};

exports.getSubjectsBySemester = async (req, res) => {
  try {
    const { semesterId } = req.params;
    const subjects = await Subject.find({ semester: semesterId });
    res.status(200).json(subjects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching subjects", error: err.message });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedSubject);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating subject", error: err.message });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;
    await Subject.findByIdAndDelete(id);
    res.status(200).json({ message: "Subject deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting subject", error: err.message });
  }
};
