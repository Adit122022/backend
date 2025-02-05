const mongoose = require('mongoose')
const PostModel = new mongoose.Schema({
    title:{ required: true , type: String},
    image:{ required: true , type:String},
    content:{ required: true , type:String}
})

module.exports.PostModel = mongoose.model('Post', PostModel)