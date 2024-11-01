const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/assignment1');

router.get('/assignments/fibonacci/:n', AssignmentController.fibonacci);

module.exports = router;
