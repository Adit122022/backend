const mongoose = require('mongoose');
 const PostSchema = new mongoose.Schema({
    media: {  type: String,  required: true },
    caption: {  type: String,  required: true  }
 })

 module.exports.postsModel = mongoose.model('Post', PostSchema);