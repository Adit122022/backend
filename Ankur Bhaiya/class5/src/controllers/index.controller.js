const userModel = require('../models/user.model')
module.exports.indexController =(req,res)=>{
    res.send("HELLO WORLD!");
}
module.exports.registerController =(req,res)=>{
    console.log(req.query)
    res.send("Register");
}