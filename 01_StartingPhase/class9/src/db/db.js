const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URL) // 0.0.0.0 for localhost, class9 is the name of the database
        .then(() => console.log('MongoDB Connected...✅✅✅'))
        .catch(err => console.log(err));
}

module.exports = connect;

/*
MONOG_URL -> its a secret MONGO DB URL so u can  change it by your URL path
*/