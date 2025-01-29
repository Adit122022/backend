const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const indexRoutes = require('./routes/index.routes')
const userRoutes = require('./routes/user.routes')


app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRoutes);
app.use('/users', userRoutes);

module.exports = app;