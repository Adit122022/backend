const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const userRouters = require('./routes/users.routes');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRouters);

module.exports = app;