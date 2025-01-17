const express = require('express');
const router = express.Router();
const {indexController} = require('../controllers/index.controller')

// middleware to log requests
router.get('/',indexController )
module.exports = router