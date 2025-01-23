const mongoose = require('mongoose')
const Users = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    profileImage:{type: String, required: true}
});

module.exports = mongoose.model('User', Users);