const { postsModel } = require("../models/postModels");
const userModels = require("../models/userModels");

module.exports.CreatePostController = async (req, res) => {
    try{
     const { media , caption } = req.body; 
     if( !media || !caption ) return res.status(400).json({messasge : "Invalid  credentials"});
      const post =  await postsModel.create({ media , caption  });
      await userModels.findByIdAndUpdate(req.user._id,{
        $push: { posts: post._id }  // add post id to user's posts array
      })
      return res.status(200).json(post);
    }
    catch(err){  console.error(err);
                 return res.status(500).json({message : "Server Error"});   }
     }