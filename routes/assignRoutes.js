const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/assign3');

router.get('/assignments/factorial/:number', AssignmentController.factorial);

module.exports = router;
