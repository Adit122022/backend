const dotenv = require('dotenv');
dotenv.config();
const  express = require('express');
const app = express();
const cookieParser = require("cookie-parser"); 
const indexRouters = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');

app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use('/', indexRouters);
app.use('/users',userRoutes)

module.exports = app;