const jwt = require('jsonwebtoken')
const { PostModel } = require('../models/post.model')
module.exports.indexController = (req,res)=>{
res.render('index')
}
module.exports.FeedController = async(req,res)=>{
   try{
    const token = req.cookies['token']
    if (!token) {
        return res.redirect("/users/register");
      }
      const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
      
        const posts = await PostModel.find().sort({ createdAt: -1 }); 
        res.render('feed', { posts });
   }catch(err){
    res.status(400).send(err.message);
    res.redirect("/");
   }
}