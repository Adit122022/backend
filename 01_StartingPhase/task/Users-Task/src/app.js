const express = require('express'); 
const app = express();

app.set('view engine', 'ejs');
app.set('views', "./src/views")

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

const indexRouters = require('./routes/index.router')


app.use('/' ,indexRouters)
module.exports = app;