const userModels = require("../models/userModels");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require("../config/config");

module.exports.registerUserController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Invalid username, email, or password provided' });
    }

    const isUserExist = await userModels.findOne({ $or: [{ username:username }, { email:email }] });

    if (isUserExist) {
      return res.status(400).json({ message: 'Username or Email already exists' });
    }

    const hashedPassword = await userModels.haspassword(password);
    const user = await userModels.create({ username, email, password: hashedPassword });
    
    const token = user.generateToken();

    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'INTERNAL SERVER ERROR 🐼🐼' });
  }
};

module.exports.loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Invalid username or password provided' });
    }

    const isUserExist = await userModels.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({ message: 'Invalid username or password provided' });
    }

    const isMatch = await userModels.comparePassword(password, isUserExist.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password provided' });
    }

    const token = isUserExist.generateToken()
  
    

    res.status(200).json({token , user:isUserExist });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'INTERNAL SERVER ERROR 🐼🐼' });
  }
};

module.exports.getUserProfileController = async (req, res) => {
  try { const user = await userModels.findById(req.user._id).populate('posts');
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'INTERNAL SERVER ERROR 🐼🐼' });
  }
};
