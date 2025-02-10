module.exports.authUser = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(400).json({message:"Invalid username or password"}) 
    next();
}