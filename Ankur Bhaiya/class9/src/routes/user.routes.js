const {Router} = require('express');
const route = Router();
const { registerController } = require('../controllers/user.Controller');

route.get('/' , registerController )

module.exports = route