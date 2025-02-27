const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/users.routes.js');
const PostRoutes = require('./routes/post.routes.js');



app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api/users', userRoutes);
app.use('/v1/api/post', PostRoutes);





module.exports = app