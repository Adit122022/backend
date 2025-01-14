const express = require('express')
const app = express();
const {indexController , aboutController} = require('./controllers/index.controller')
const {getProfileController} = require('./controllers/user.controller')
const {getProductController} = require('./controllers/product.controller')

app.get('/',indexController); 
app.get('/about',aboutController); 
app.get('/user/profile', getProfileController); 
app.get('/product', getProductController); 
module.exports = app;