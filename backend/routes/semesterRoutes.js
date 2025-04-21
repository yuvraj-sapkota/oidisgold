const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/semesterController');

// Create a semester
router.post('/', semesterController.createSemester);

// Get all semesters
router.get('/', semesterController.getAllSemesters);

// Update semester by ID
router.put('/:id', semesterController.updateSemester);

// Delete semester by ID
router.delete('/:id', semesterController.deleteSemester);

module.exports = router;
