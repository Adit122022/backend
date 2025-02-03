const mongoose = require('mongoose');
const connect = ()=>{
    mongoose.connect('mongodb://localhost/BackeupClassAnkurBhiayaLiveClass')
   .then(()=>console.log('Connected to MongoDB ..... ✅✅✅'))
   .catch(err=>console.error('Failed to connect to MongoDB', err));
}

module.exports = connect