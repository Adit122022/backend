const express = require('express');
const app = express();
 const morgan = require('morgan');
const cors = require('cors')
app.use(cors())


const UserRoutes = require('./routes/user.routes')
const PostsRoutes = require('./routes/post.routes')
 
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', UserRoutes)
app.use('/posts' ,PostsRoutes )
module.exports = app;