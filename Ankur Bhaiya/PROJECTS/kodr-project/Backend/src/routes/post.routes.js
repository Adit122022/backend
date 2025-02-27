const express = require('express')
const router = express.Router()
const userMiddleware = require("../middlewares/user.middleware")
const { createPost } = require('../controllers/post.controller')
 const {Readable} = require('stream')

const multer = require('multer')
const imagekit = require('../services/imageKit.service')
const upload = multer({ storage: multer.memoryStorage() }) //  thori der k liye RAM mai rakthe hai fir imagekit pai upload kar denge



router.post('/create',userMiddleware.authUser, upload.single('media') ,async(req,res,next)=>{
try{
   
    const file = await imagekit.upload({
        file: Readable.from(req.file.buffer),                 //req.file.buffer.toString('base64')
        fileName:"hello",
        isPublished:true,
        isPrivateFile:false
    
    })
    req.body.image = file
    next();
}catch(err) {
    console.log(err)
}
} )




module.exports = router ;