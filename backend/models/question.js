const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  year: Number,
  season: String, // "Fall", "Spring"
  imageUrl: String,
});

module.exports = mongoose.model("Question", questionSchema);
