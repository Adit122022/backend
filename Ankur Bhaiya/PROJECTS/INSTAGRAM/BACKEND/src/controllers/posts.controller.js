const { postModel } = require("../models/post.model");
const userModels = require("../models/userModels");

module.exports.createPostController = async(req,res) =>{
    try{
         const {media , caption} = req.body;
    if(!media) return res.status(400).json({message :"media is required"})
    if(!caption) return res.status(400).json({message :"media is required"})
   const newPost = await postModel.create({ media, caption})

     await userModels.findByIdAndUpdate(req.user._id,{  $push: { post:newPost._id } })
     res.status(201).json(newPost)
     } catch(err){ 
       console.log(err);
        res.status(500).json({message:"Internal server error"}) 
    }


  

}
