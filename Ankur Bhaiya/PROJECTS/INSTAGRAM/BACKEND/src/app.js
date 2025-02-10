const express = require('express');
const app = express();
const UserRoutes = require('./routes/users.routes');



app.set('view engine', 'ejs');
app.set('views', "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', UserRoutes);

module.exports = app;