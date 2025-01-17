const driver = require('../db/db')
module.exports.indexController =  (req, res) => { res.render('DriverFrom')  }
module.exports.submitController = async (req,res) => {
    console.log(req.body)
    res.render('Submited')
    const { username , phoneNumber , password } = req.body;
     const newDriver =  new driver  ({
        username ,
        phoneNumber,
        password
    })
  await   newDriver.save();
  
}