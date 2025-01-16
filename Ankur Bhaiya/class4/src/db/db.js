const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/class4')          // 0.0.0.0  , for localhost   -  class4 is the name of the databse
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const userSchema = new mongoose.Schema({
        username: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    })
    
    module.exports = mongoose.model('User', userSchema);