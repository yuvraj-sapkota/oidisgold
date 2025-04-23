// controllers/semesterController.js
const Semester = require("../models/semester");

exports.createSemester = async (req, res) => {
  try {
    const newSemester = new Semester(req.body);
    await newSemester.save();
    res.status(201).json(newSemester);
  } catch (err) {
    res.status(500).json({ message: "Error creating semester", error: err.message });
  }
};

exports.getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.status(200).json(semesters);
  } catch (err) {
    res.status(500).json({ message: "Error fetching semesters", error: err.message });
  }
};

exports.updateSemester = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSemester = await Semester.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedSemester);
  } catch (err) {
    res.status(500).json({ message: "Error updating semester", error: err.message });
  }
};

exports.deleteSemester = async (req, res) => {
  try {
    const { id } = req.params;
    await Semester.findByIdAndDelete(id);
    res.status(200).json({ message: "Semester deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting semester", error: err.message });
  }
};
