const express = require('express')
const app = express();
const controller = require('./controllers/index.controller')

app.get('/',controller.indexController); 
app.get('/about',controller.aboutController); 
module.exports = app;