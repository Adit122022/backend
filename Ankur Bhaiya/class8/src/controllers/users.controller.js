const { UserModel } = require("../models/UserModel.schema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
  
 module.exports.RegisterUserController = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        const hasPassword =await bcrypt.hash(password ,10)
    const newUser = await UserModel.create({ username, email, password:hasPassword })
    res.status(201).json(newUser);
    }
    catch(err) {
        res.status(400).json({message:err.message});
    }
 }

 module.exports.LoginUserController = async (req,res)=>{
try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
} 
catch (err) { res.status(400).json({message:err.message});}
 }

 module.exports.ProfileUserController = async (req,res)=>{
    try{
      const decode = jwt.verify(req.headers.authorization?.split(' ')[1],process.env.JWT_SECRET);
      if(!decode) return res.status(401).json({message:'Token not provided'});
      const user = await UserModel.findById(decode.id);
      res.status(200).json(user);     
 }catch(err) {  res.status(400).json({message:err.message}); }

 }