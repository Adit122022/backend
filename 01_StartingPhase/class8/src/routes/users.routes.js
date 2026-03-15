const {Router} = require('express');
const { RegisterUserController, LoginUserController, ProfileUserController } = require('../controllers/users.controller');
const router = Router();

 router.post('/register' , RegisterUserController)
 router.post('/login' , LoginUserController)
 router.get('/profile',ProfileUserController)

module.exports = router; 