const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://0.0.0.0/DatabaseName') // 0.0.0.0 for localhost, DatabaseName is the name of the database
        .then(() => console.log('MongoDB Connected...✅✅✅'))
        .catch(err => console.log(err));
}

module.exports = connect;