 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
const userModels = require('../models/userModels');
const config = require('../config/config');
module.exports.RegisterController = async (req, res) => {
 try{
  const { username , email,password } = req.body; 
  if( !username || !email || !password) return res.status(400).json({messasge : "Invalid  credentials"});
   const hashPassword = await userModels.hashPassword(password);
    const IsUser = await userModels.findOne({$or: [{ username: username }, { email: email }]});
    if(IsUser) return res.status(409).json({message : "User already exist"}); 
   const NewUser =  await userModels.create({ username , email, password : hashPassword  });
   const token = NewUser.generateToken();
   return res.status(200).json({NewUser, token});
 }
 catch(err){  console.error(err);
              return res.status(500).json(err);   }
  }

  module.exports.loginController = async(req,res) =>{
    try{
     const {username, password } = req.body;
     if(!username ||!password) return res.status(400).json({message : "Invalid credentials"});
     const user = await userModels.findOne({username : username});
     if(!user) return res.status(404).json({message : "User not found"});
     const isMatch = await user.comparePassword(password);
     if(!isMatch) return res.status(401).json({message : "Invalid password"});
     const token = await user.generateToken();
     return res.status(200).json({user, token});
    }catch(err){
     console.error(err);
     return res.status(500).json(err);
    }
  }
 module.exports.ProfileController =async (req,res)=>{
  const user = await userModels.findById(req.user._id).populate("posts")
 res.send(user);
 }