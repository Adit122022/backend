const userModel = require('../models/index.Models')
module.exports.indexController =( req,res)=>{
res.render("form")
}

module.exports.submitController = async (req,res)=>{
    const { username,email, bio,profileImage,} = req.body 
    const newuser =  await new userModel({ username: username, email: email , profileImage: profileImage , bio: bio})
     newuser.save()
   res.redirect('/users')
}
module.exports.showUserController = async( req,res)=>{
   const users =  await userModel.find()
    res.render('Users',{users})
    }
module.exports.OneUserController = async( req,res)=>{
    const id=req.params.id
    const users =  await userModel.find({_id:id})
    res.render('details',{users})
}

