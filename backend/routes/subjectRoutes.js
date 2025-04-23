const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectControllers");

// Create a subject
router.post("/", subjectController.createSubject);

// Get subjects by semester ID
router.get("/:semesterId", subjectController.getSubjectsBySemester);

// Update subject by ID
router.put("/:id", subjectController.updateSubject);

// Delete subject by ID
router.delete("/:id", subjectController.deleteSubject);

module.exports = router;
