const express = require('express')
const router = express.Router()
const  {indexController} = require('../controllers/index.controllers')
const  {submitController} = require('../controllers/index.controllers')

 router.get('/register', indexController)
 router.post('/register', submitController)

module.exports  = router