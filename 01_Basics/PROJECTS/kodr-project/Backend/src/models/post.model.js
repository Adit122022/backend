const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    media: {  type: String, required: true,},
    caption:{ type: String, required: true,},
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
})

const PostModel = new mongoose.model('Post', PostSchema)

module.exports = PostModel;