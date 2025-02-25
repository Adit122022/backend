const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users.routes.js');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api/users', userRoutes);





module.exports = app