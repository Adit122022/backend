const express = require('express');
const router = express.Router();
const {indexController} = require('../controllers/index.controller')
const {registerController} = require('../controllers/index.controller')

// middleware to log requests
router.get('/',indexController )
router.get('/register' , registerController)
module.exports = router;