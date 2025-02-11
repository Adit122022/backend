const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { config } = require('dotenv')

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, trim:true, unique: true, lowercase: true, minlength: [3,'Username must be at least 3 characters'], maxlength: [30 , 'Username must be at most 30 characters']},
    email: { type: String, required: true, trim:true, unique: true, minlength: [3,'email must be at least 3 characters'], maxlength: [30 , 'email must be at most 30 characters']},
    password: {  type: String },
    profileImage: {  type: String ,default : "https://i.pinimg.com/736x/d4/22/47/d4224772b36eb181979c343e8f087082.jpg"},
    posts:[{ type: mongoose.Schema.Types.ObjectId,  ref: 'Post' }] ,
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    following: [{type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
})

UserSchema.methods.generateToken = ()=>{
    return jwt.sign({ id: user._id,username:user.username,email:user.email }, config.SECRET_KEY);

}
UserSchema.statics.verfiyToken = (token)=>{
return jwt.verify(token, config.SECRET_KEY)
}
UserSchema.statics.haspassword =async(password)=>{
   return await bcrypt.hash(password,10)
}
UserSchema.statics.comparePassword =async(password ,hash)=>{
   return await bcrypt.compare(password,hash)
}
module.exports = mongoose.model('user', UserSchema);