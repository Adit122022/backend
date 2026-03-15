const express = require('express');
const app = express();
const indexRoute = require('./routes/index.routes')

app.use('/', indexRoute);

module.exports = app;