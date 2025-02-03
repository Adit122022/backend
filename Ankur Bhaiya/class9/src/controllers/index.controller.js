const jwt = require("jsonwebtoken");
module.exports.indexController = (req, res) => {
  res.render("index");
  // console.log(req.cookies)
};
module.exports.feedController = (req, res) => {
  try {
    // getting the token from the cookie
    const token = req.cookies["token"];
    // checking if the token exists
    if (!token) {
      return res.redirect("/users/register");
    }
    // verifying the token
    const decode = jwt.verify(token, process.env.KEY_TOKEN);
    // render the page if everything is good
    res.render("feed");
  } catch (e) {    res.redirect("/users/register"); }
};
