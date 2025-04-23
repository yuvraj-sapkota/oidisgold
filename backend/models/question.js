const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    year: { type: Number, required: true },
    season: { type: String, enum: ["spring", "Fall"], required: true }, // "Fall", "Spring"
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
