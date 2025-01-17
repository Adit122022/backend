const userModel = require('../models/user.model')
module.exports.indexController =(req,res)=>{
    res.send("HELLO WORLD!");
}
module.exports.registerController = async(req,res)=>{
    console.log(req.query);
const { username , email , password } = req.query;
    const newUser = new userModel({
        username,
        email,
        password,
    });
    await newUser.save();
    res.send("Register");
}

module.exports.userController = async(req,res)=>{
    const users = await userModel.find();
    res.send(users);
}
module.exports.updateUserController = async(req,res)=>{
    const users = await userModel.findOneAndUpdate({email:"a@a.com"},{username: req.query.username} );
    res.send(users);
}

module.exports.deleteUserController = async(req,res)=>{
    const users = await userModel.findOneAndDelete({email:req.query.email});
    res.send(users);
}

