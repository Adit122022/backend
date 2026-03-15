const jwt = require('jsonwebtoken')
const { PostModel } = require('../models/post.model')
module.exports.indexController = (req,res)=>{
res.render('index')
}
module.exports.FeedController = async(req,res)=>{    
        const posts = await PostModel.find().sort({ createdAt: -1 }); 
        res.render('feed', { posts });
 }