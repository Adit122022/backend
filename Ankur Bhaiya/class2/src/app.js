const express = require('express')
const app = express();
const controller = require('./controllers/index.controller')
app.get('/',controller.indexController); 
module.exports = app;