const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/user.models');

module.exports.registerUser = async (req, res) => {
    try {
// Destructured the data
        const { username, email, password } = req.body;
// Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
// Create the user in the database
        const user = await UserModel.create({ username, email, password: hashedPassword });
// Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
// Set the token in an HTTP-only cookie
        res.cookie("token", token,);
        res.redirect('/feed');
    } catch (err) {
        console.error("Registration Error:", err.message);
        
        return res.status(400).json({ error: err.message });
    }
};
