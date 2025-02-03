const {Router} = require('express');
const { registerController } = require('../controllers/user.Controller');
const route = Router();

route.get('/' , registerController )

module.exports = route