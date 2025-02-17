const {Router} = require('express');
const { CreatePostController } = require('../controllers/posts.controller');
const { AuthUser } = require('../middleware/AuthUser');

const router = Router();

router.post('/create',AuthUser ,CreatePostController)

module.exports = router;