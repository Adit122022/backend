const {Router } = require('express');
const { indexController } = require('../controllers/index.controller');

const route = Router();

route.get('/' , indexController)

module.exports = route