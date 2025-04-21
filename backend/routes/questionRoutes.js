const express = require("express");
const router = express.Router();
const questionController = require("../controllers/qeustionController");

// Create a question
router.post("/", questionController.createQuestion);

// Get questions by subject ID
router.get("/subject/:subjectId", questionController.getQuestionsBySubject);

// Get questions by subject ID with filter (year & season)
router.get(
  "/filter/:subjectId",
  questionController.getQuestionsBySubjectAndFilter
);

// Update question by ID
router.put("/:id", questionController.updateQuestion);

// Delete question by ID
router.delete("/:id", questionController.deleteQuestion);

module.exports = router;
