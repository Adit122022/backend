const {Router} = require('express');
const { authUser } = require('../middlewares/user.middleware');
const { createPostController } = require('../controllers/posts.controller');
const route = Router();

route.post('/create',authUser,createPostController)

module.exports= route;