const { UserModel } = require("../models/user.models")
const bcrypt = require('bcrypt');

module.exports.registerUser = async(req, res) => {
try{
    const {email , password , username} = req.body;
const haspassword = await  bcrypt.hash(password, 10);
 const newUser = new UserModel({  email,  password: haspassword,  username})
    await newUser.save();
 res.status(201).json({newUser , message:'User created successfully'});
}
catch(err) {
    res.status(400).json({message:err.message});
}
}
module.exports.loginUser = async(req, res) => {
    try{
        const {email , password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user) return res.status(400).json({message:'email or password not found!'});
        const isMatch = await bcrypt.compare(password, user.password); // this return a promise  and after the promis resolved it return a boolean value
        if(!isMatch) return res.status(400).json({message:'email or password not found!'});
        res.status(200).json({message:'Login successful ✅✅✅'});

    }catch(err){
        res.status(400).json({message:err.message});
    }
}