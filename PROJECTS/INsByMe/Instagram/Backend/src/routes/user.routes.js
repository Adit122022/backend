const {Router} = require('express');
const { RegisterController, loginController, ProfileController } = require('../controllers/user.controller');
const { AuthUser } = require('../middleware/AuthUser');

const router = Router();

router.post('/register', RegisterController);
router.post('/login', loginController);
router.get('/profile',AuthUser,ProfileController)

module.exports = router;