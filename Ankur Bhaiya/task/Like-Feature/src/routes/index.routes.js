const {Router} = require('express');
const { indexController, createUser, homeController,  createpost, showcreatepostform, LikePost } = require('../controllers/index.controller');
const router = Router();

router.get('/', indexController);
router.post('/create', createUser);
router.get('/home', homeController);
router.post('/create-post', createpost);
router.get('/create-post', showcreatepostform);
router.get('/like/:postId', LikePost);



module.exports = router 