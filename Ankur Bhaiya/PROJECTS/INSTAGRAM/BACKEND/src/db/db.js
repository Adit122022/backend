const mongoose = require('mongoose');
const config = require('../config/config');

const connect = () => {
    mongoose.connect(config.MONGO_URL) // 0.0.0.0 for localhost, DatabaseName is the name of the database
        .then(() => console.log('🐼🐼🐰MongoDB Connected...✅✅✅ ... 🐼🐼🐰'))
        .catch(err => console.log(err));
}

module.exports = connect;