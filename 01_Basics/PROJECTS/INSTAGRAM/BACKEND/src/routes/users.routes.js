const {Router} = require('express');
const { registerUserController, loginUserController, getUserProfileController } = require('../controllers/user.controller');
const { authUser } = require('../middlewares/user.middleware');

const router = Router();

router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.get("/profile",authUser,getUserProfileController)

module.exports = router;