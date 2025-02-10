const jwt = require("jsonwebtoken");
const config = require("../config/config");
const userModels = require("../models/userModels");

module.exports.authUser = async(req,res,next) => {
 try{
    const token = req.headers.authorization.split(' ')[1];
  
    if(!token) return res.status(400).json({message:"Invalid username or password"}) 

    const decoded = jwt.verify(token,config.SECRET_KEY);
    if(!decoded) return res.status(400).json({message:"UnAuthorized"});
    const user = await userModels.findOne({_id:decoded.id})
    req.user = user;
    next();
 }catch(err){  res.status(400).json({message:"Invalid token"}) }
}