const {Router}   = require('express');
const { indexController, feedController } = require('../controllers/index.controller');
const route = Router();

route.get('/',  indexController)
route.get('/feed',feedController)

module.exports = route;