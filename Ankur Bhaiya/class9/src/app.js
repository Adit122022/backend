const express = require("express");
const cookieParser = require("cookie-parser"); 
const app = express();
const indexRouters = require('./routes/index.routes');
const userRouters = require('./routes/user.routes');

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/', indexRouters);
app.use('/users',userRouters );

module.exports = app;