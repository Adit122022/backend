const express = require('express')
const { indexController, submitController, showUserController, OneUserController } = require('../controllers/index.Controller')
const router = express.Router()

router.get('/' , indexController)
router.post('/create',submitController)
router.get('/users',showUserController)
router.get('/user/:id',OneUserController)

module.exports =router;