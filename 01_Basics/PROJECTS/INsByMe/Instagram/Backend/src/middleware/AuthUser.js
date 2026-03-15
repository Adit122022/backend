 const jwt = require('jsonwebtoken');
const userModels = require('../models/userModels');
const config = require('../config/config');
module.exports.AuthUser =async (req,res,next)=>{
const token = req.headers['authorization']?.split(' ')[1]; // Handle potential undefined
 if(!token) return res.status(401).json({messasge:"Unathorized"});
  const decode = userModels.verifyToken(token)
  const user = await userModels.findOne({_id:decode.id}).lean();
  if(!user) return res.status(401).json({messasge:"Unathorized"});
  req.user = user;
    next();
}