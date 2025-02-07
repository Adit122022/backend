const express = require('express');
const app = express();
const indexRouters = require('./routes/index.routes');



app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRouters);

module.exports = app;