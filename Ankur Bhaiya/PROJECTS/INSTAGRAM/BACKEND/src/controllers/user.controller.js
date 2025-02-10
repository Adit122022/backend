const userModels = require("../models/userModels");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require("../config/config");

module.exports.registerUserController = async(req,res) =>{
 
  try{
    const { username , email , password }  = req.body;
    if(!username) return res.status(400).json({message : 'Invalid username or password provided '});
    if(!email)    return res.status(400).json({message : 'Invalid username or password provided '});
    if(!password) return res.status(400).json({message : 'Invalid username or password provided '});
    

     const isUserExist = await userModels.findOne({ $or:[ {username: username}, {email: email }] });
    //  $or:[ {username: username, email: email }]     $ is the query operator  OR operator matlab multiple  conditions, always takes an array
 
    if(isUserExist) return res.status(400).json({message : 'Username or Email already exist'});

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModels.create({ username, email, password:hashedPassword });
    const token = jwt.sign({ id: user._id,username:user.username,email:user.email }, config.SECRET_KEY);
 
    res.status(201).json({ user: user, token: token });
    
  }catch(err){ 
      console.error(err);
   return res.status(500).json({message : 'INTERNAL SERVER ERROR 🐼🐼'});}
}

module.exports.loginUserController = async(req,res) =>{
    try{
    const { username, password } = req.body;
    if(!username) return res.status(400).json({message : 'Invalid username or password provided '});
    if(!password) return res.status(400).json({message : 'Invalid username or password provided '});
    
    const user = await userModels.findOne({ username });
    if(!user) return res.status(400).json({message : 'Invalid username or password provided'});
    
    const isMatch =await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message : 'Invalid username or password provided'});
    
    const token = jwt.sign({ id: user._id, username:user.username, email:user.email }, config.SECRET_KEY);
    
    res.status(200).json({ user: user, token: token }); 

    }catch(err){
        console.error(err);
        return res.status(500).json({message : 'INTERNAL SERVER ERROR �����'});
    }
}

module.exports.getUserProfileController = async(req,res) => {
    
}