const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

module.exports.getRegisterController = (req, res) => {
  res.render("register");
};

module.exports.postRegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    /*  
//  Check if username or email is empty
        if (!username ||!email ||!password) {
            return res.status(400).send("All fields must be filled out.");
        }
*/
    /* 
// Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists! Try logging in.");
        }
*/

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    // Tokn creation
    const token = JWT.sign({ id: user.id }, process.env.KEY_TOKEN);
    // Store  data in a cookie  note : dont use the json.stringfy
    res.cookie("token", token);
    res.redirect("/users/login");
  } catch (e) {
    res.status(400).send(e.message);
    res.redirect("/users/register");
  }
};

module.exports.getLoginController = (req, res) => {
  res.render("login");

};

module.exports.postLoginController = async (req, res) => {
    try{
        const {username, password} = req.body;
// finding the user
        const user = await User.findOne({username});
//if the user not found
        if(!user){ return res.status(400).send("User not found!");}
// checking the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
//if password is not correct
        if(!isMatch){ return res.status(400).send("Incorrect password!");}
// tokn creation
        const token = JWT.sign({id: user.id}, process.env.KEY_TOKEN);
// storing  data in a cookie
        res.cookie("token", token);
// if everything is good redirect to feed page
        res.redirect("/feed");

    }catch(e){
        res.status(400).send(e.message);
        return res.redirect("/users/login");
 }
}
