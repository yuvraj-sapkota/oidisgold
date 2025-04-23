// controllers/semesterController.js
// const Semester = require("../models/semesterModel");
const Semester = require("../models/semester");

exports.createSemester = async (req, res) => {
  const { name } = req.body;

  try {
    // Check if semester already exists (case-insensitive)
    const existing = await Semester.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    if (existing) {
      return res.status(200).json(existing); // return existing one
    }

    const newSemester = new Semester({ name });
    await newSemester.save();
    res.status(201).json(newSemester);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.status(200).json(semesters);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching semesters", error: err.message });
  }
};

exports.updateSemester = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSemester = await Semester.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedSemester);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating semester", error: err.message });
  }
};

exports.deleteSemester = async (req, res) => {
  try {
    const { id } = req.params;
    await Semester.findByIdAndDelete(id);
    res.status(200).json({ message: "Semester deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting semester", error: err.message });
  }
};
