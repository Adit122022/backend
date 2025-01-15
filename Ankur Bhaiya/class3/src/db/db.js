const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/class3')          // 0.0.0.0  , for localhost   -  class3 is the name of the databse
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));