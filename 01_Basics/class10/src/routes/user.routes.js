const {Router } = require('express');
const { registerUser } = require('../controllers/user.controller');
const route = Router();


route.post('/register' , registerUser)


module.exports = route