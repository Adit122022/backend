const {Router}  = require('express');
const { registerUser } = require('../controllers/user.Controllers');
const router = Router();

router.get('/register', registerUser);
module.exports = router;