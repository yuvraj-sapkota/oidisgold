const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    year: { type: Number, required: true },
    season: { type: String, required: true }, // "Fall", "Spring"
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
