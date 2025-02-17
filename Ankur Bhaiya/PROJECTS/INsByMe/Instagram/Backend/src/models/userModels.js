const mongoose = require('mongoose');
const  jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require('../config/config');
const UserScehma = new mongoose.Schema({
    username: {type: String,required: true,unique: true,minlength: [ 3, "Username must be at least 3 characters long" ], maxlength: [ 20, "Username must be at most 20 characters long" ], trim: true },
    email: {  type: String,required: true, unique: true, trim: true, minlength: [ 5, "Email must be at least 5 characters long" ],maxlength: [ 20, "Email must be at most 20 characters long" ] },
    profileImage: {  type: String,  default: "https://i.pinimg.com/736x/6c/b9/7e/6cb97e4952349388bd90236f8881bda4.jpg" },
    password: {    type: String },
    posts: [ {  type: mongoose.Types.ObjectId,   ref: "Post" } ]

})

UserScehma.methods.generateToken = function (){
    return jwt.sign({id:this._id, email:this.email},config.JWT_SECRET_KEY);
}
UserScehma.statics.verifyToken =   function (token) {
    return  jwt.verify(token, config.JWT_SECRET_KEY);

}
UserScehma.statics.hashPassword  =async function (password) {
    return await bcrypt.hash(password, 10)
}
UserScehma.methods.comparePassword = async function (password){
return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserScehma);