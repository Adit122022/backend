const express = require('express')
// controllers 
const {indexController , aboutController} = require('../controllers/index.controller')
const {getProfileController} = require('../controllers/user.controller')
const {getProductController} = require('../controllers/product.controller')
const router = express.Router()

router.get('/',indexController); 
router.get('/about',aboutController); 
router.get('/user/profile', getProfileController); 
router.get('/product', getProductController);

module.exports = router;
// please sepearte the routes and add them into different routes formate