var ImageKit = require("imagekit");
const config = require("../config/config");

var imagekit = new ImageKit({
    publicKey : config.IMAGEKIT_PUBLIC,
    privateKey : config.IMAGEKIT_PRIVATE,
    urlEndpoint : config.IMAGEKIT_URL
});

module.exports = imagekit;