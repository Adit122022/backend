const express = require('express')
const router = express.Router()
const userMiddleware = require("../middlewares/user.middleware")
const { createPost } = require('../controllers/post.controller')
const {  imageKitUploadMiddelware } = require('../middlewares/post.middleware')



const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() }) //  thori der k liye RAM mai rakthe hai fir imagekit pai upload kar denge



router.post('/create',userMiddleware.authUser, upload.single('media') ,imageKitUploadMiddelware, createPost )





module.exports = router;