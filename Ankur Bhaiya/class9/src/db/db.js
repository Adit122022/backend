const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/class9') // 0.0.0.0 for localhost, class9 is the name of the database
        .then(() => console.log('MongoDB Connected...✅✅✅'))
        .catch(err => console.log(err));
}

module.exports = connect;