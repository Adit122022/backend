const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username :{type :String , required : true},
    postImage :{type :String , required : true},
    caption :{type :String , required : true},
    likeCount :{type :Number, default : 0},
 
})

module.exports = mongoose.model('Post', PostSchema);