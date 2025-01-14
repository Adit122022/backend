// Express ko import kiya 
const express = require('express')
const indexRoute = require('./routes/index.routes')
const app = express();
 
app.use('/',indexRoute); 
app.use('/about',indexRoute); 
app.use('/user/profile', indexRoute); 
app.use('/product', indexRoute);
module.exports = app;