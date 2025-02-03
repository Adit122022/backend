 const jwt = require('jsonwebtoken')
module.exports.indexController = (req, res)=>{
    res.render('index');
    // console.log(req.cookies)
}
module.exports.feedController = (req,res) =>{
    const token = req.cookies['token'];
    const decode = jwt.verify(token , token-key)
}