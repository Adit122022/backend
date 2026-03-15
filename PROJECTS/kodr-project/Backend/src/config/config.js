require("dotenv").config();


const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/kodr-project',
    JWT_SECRET: process.env.JWT_SECRET,
    IMAGEKIT_PUBLIC: process.env.ImageKit_Public_Key,
    IMAGEKIT_PRIVATE: process.env.ImageKit_Private_Key,
    IMAGEKIT_URL: process.env.ImageKit_URL_ENDPOINT,

}

const config = Object.freeze(_config);

module.exports = config;