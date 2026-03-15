const express = require('express');
const User = require('./models/user.model');

const app = express()
 app.post('/create',(req,res)=>{

    const {username,password ,role , email} = req.body;
    // Create a new user
    const newUser = new User({username,password,role, email});
    
    // Save the user to the database
    newUser.save()
    // Validate inputs
    if(!username ||!password ||!email || !role){
        return res.status(400).json({message: "Missing required fields"});
    }
 })


module.exports = app