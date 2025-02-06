const {Router } = require('express');
const { indexController, FeedController } = require('../controllers/index.controller');
const { PostHandler } = require('../controllers/post.controller');
const { AuthMiddlewaare } = require('../middelware/AuthMiddelWare');

const route = Router();

route.get('/' , indexController)
route.post('/post',PostHandler)
route.get('/feed',AuthMiddlewaare,FeedController)

module.exports = route