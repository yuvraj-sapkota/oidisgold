const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Semester", semesterSchema);
