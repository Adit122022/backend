const jwt = require("jsonwebtoken");
module.exports.AuthMiddlewaare = (req,res,next) =>{
    try{
        const token = req.cookies['token']
        if (!token) {
            return res.redirect("/users/register");
          }
          const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
          next();
       }catch(err){
        res.send('err.message');
        res.redirect("/");
       }
}