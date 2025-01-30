const {Router}  = require('express');
const { registerUser, loginUser, profile } = require('../controllers/user.Controllers');
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', profile)
module.exports = router;