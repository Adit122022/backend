const express = require('express')
  const app = express()
  app.use(express.urlencoded({ extended: true }));
  const  indexRoutes = require('./routes/index.routes')
  app.set('view engine', 'ejs');
  app.set("views" ,"./src/views")
app.use('/' , indexRoutes);
   module.exports = app;