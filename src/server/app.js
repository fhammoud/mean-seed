var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var db_url = require('./db');

var index = require('./routes/index');
var users = require('./routes/users');

// Start express
var app = express();

// uncomment after placing your favicon in /dist
app.use(favicon(path.join('dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('dist')));

// app routes
app.use('/users', users);

// catch all other requests and return index
app.use('*', index);

module.exports = app;
