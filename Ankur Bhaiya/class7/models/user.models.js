const mongoose = require('mongoose');
const userSchema = new mongoose.Schema ({
    username :{ type :'String' , required : [true, 'Username is required'] ,  unique :[true, 'Username already exists'] },
    email : {type :'String' , required : [true, 'Email is required'] , unique : [true, 'Email already exists'], minlength:[6,'Email must be at least 6 characters']},
    password : {type :'String' , required : [true, 'password is required'], minlength : [6, 'Password must be atleast 6 characters long']}
})
module.exports.UserModel = mongoose.model('users', userSchema);