const express = require("express");
const router = express.Router();
const questionController = require("../controllers/qeustionController");
const upload = require("../middlewares/uploadMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);
// Create a question
router.post("/", upload.single("image"), questionController.createQuestion);

// Get questions by subject ID with filter (year & season)
router.get(
  "/filter/:subjectId",
  questionController.getQuestionsBySubjectAndFilter
);

// Get questions by subject ID
router.get("/:subjectId", questionController.getQuestionsBySubject);

// Update question by ID
router.put("/:id", questionController.updateQuestion);

// Delete question by ID
router.delete("/:id", questionController.deleteQuestion);

module.exports = router;
