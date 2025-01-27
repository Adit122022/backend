const express = require('express');
const indexRouters = require('./routes/index.routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // for data only


app.use('/', indexRouters);

module.exports = app;