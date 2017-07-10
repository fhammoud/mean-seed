// Require dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Require app routes
var index = require('./routes/index');
var users = require('./routes/users');

// Connect to DB
require('./db');

// Start express
var app = express();

// Use middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.use('/users', users);

// Catch all other requests and return index
app.use('*', index);

module.exports = app;
