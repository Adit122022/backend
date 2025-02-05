const { PostModel } = require("../models/post.model");

module.exports.PostHandler =async (req,res) =>{
    try {
        const { title, image, content } = req.body;
        await PostModel.create({ title, image, content });
        res.redirect('/feed'); 
    } catch (err) {
        res.status(500).send(err);
    }
}