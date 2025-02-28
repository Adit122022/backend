const PostModel = require("../models/post.model")


 module.exports.createPost = (req,res) =>{
  try{
    const { caption,image } = req.body;
  console.log(caption,image)
  if(!caption || !image)   return res.status(400).json({message:"All fields are required"})
 
  const post = new PostModel({
    caption,
    media:image,
    author:req.user._id
  }) 
  post.save()
  res.status(201).json(post)
  }catch(err){
    console.log(err)
    return res.status(500).json({message:"Internal server error"})
  }
  
 }