const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/assign2');

router.get('/assignments/prime/:number', AssignmentController.primeChecker);

module.exports = router;
