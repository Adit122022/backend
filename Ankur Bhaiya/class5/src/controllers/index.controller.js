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
    const users = await userModel.find({
        username: "a",
    });
    res.send(users);
}

