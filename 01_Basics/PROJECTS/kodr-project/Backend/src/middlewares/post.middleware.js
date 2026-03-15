const express = require('express')
const imagekit = require('../services/imageKit.service')
const {Readable} = require('stream')
 
 module.exports.imageKitUploadMiddelware =async(req,res,next)=>{
    try{
        console.log(req.file.buffer)
        const file = await imagekit.upload({
            file: Readable.from(req.file.buffer),                 //req.file.buffer.toString('base64')
            fileName:req.file.originalname,
            folder: "socialMediaApp",
            isPublished:true,
            isPrivateFile:false
        
        })
        console.log(file.url)
        req.body.image = file.url
        next();
    }catch(err) {
        console.log(err)
    }
    }