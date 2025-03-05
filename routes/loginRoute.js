const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Requiere

// Manejamos segun por donde venga
router.get('/', loginController.getView);
router.post('/', express.urlencoded({ extended: true }), loginController.postLogin); 

module.exports = router;
