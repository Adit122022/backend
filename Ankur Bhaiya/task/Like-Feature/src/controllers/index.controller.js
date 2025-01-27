const userModel = require("../models/userModel.schema")
const PostSchema = require("../models/posts.model.schema")
module.exports.indexController = ( req,res)=>{
    res.render("index")
    }
    module.exports.createUser =async(req,res)=>{
        const {username ,email , bio , profileImage} = req.body
        const newUser = await userModel.create({
            username,
            email,
            bio,
            profileImage
        })
        res.redirect('/home')
    }
    module.exports.homeController = async(req,res)=>{
        const posts = await PostSchema.find()
         const users = await userModel.find()
        res.render("home" ,{posts})
    }

    module.exports.showcreatepostform = (req,res)=>{
        res.render("Posts");
    }
    module.exports.createpost = async(req,res)=>{
        const {username ,likeCount , caption , postImage} = req.body
        console.log(req.body)
        const post = await PostSchema.create({
            username ,
    // profileImage ,
    postImage,
    caption ,
    // liked ,
    likeCount ,
        })
        res.redirect('/home')
    }

    module.exports.LikePost = async(req,res)=>{
        const {postId} = req.params;
        const post = await PostSchema.findByIdAndUpdate(postId,{
$inc : {likeCount : 1}
        })
        await post.save();
        res.redirect('/home')
    }