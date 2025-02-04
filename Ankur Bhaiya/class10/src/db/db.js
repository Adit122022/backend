const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/Class10') // 0.0.0.0 for localhost, DatabaseName is the name of the database
        .then(() => console.log('MongoDB Connected...✅✅✅'))
        .catch(err => console.log(err));
}

module.exports = connect;