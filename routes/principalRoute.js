const express = require('express');
const router = express.Router();
const principalController = require('../controllers/principalController');

// Require

// Manejamos segun por donde venga
router.get('/', principalController.getView);

module.exports = router;
