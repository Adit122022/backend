const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const JWT = require('jsonwebtoken')

module.exports.getRegisterController = (req, res) => {
    res.render("register");
};

module.exports.postRegisterController = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // // Check if user already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).send("User already exists! Try logging in.");
        // }

// Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
// Create new user
        const user = await User.create({
            username,
            email,
            password: hashedPassword, // Use the hashed password
        });
const token =JWT.sign({id : user.id}, "token-key")
           // Store user data in a cookie (excluding password for security)
           res.cookie("token", JSON.stringify(token));

res.redirect('/');
    } catch (e) {
       res.status(400).send(e.message )
        res.redirect("/users/register");
    }
};
