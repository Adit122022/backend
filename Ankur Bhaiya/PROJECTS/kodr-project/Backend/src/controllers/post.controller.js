const PostModel = require("../models/post.model");
const userModel = require("../models/user.model");


 module.exports.createPost = async(req,res) =>{
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
  await userModel.findByIdAndUpdate(req.user._id,{
    $push: { posts: post._id }  // add post id to user's posts array
  })
  res.status(201).json(post)
  }catch(err){
    console.log(err)
    return res.status(500).json({message:"Internal server error"})
  }
  
 }