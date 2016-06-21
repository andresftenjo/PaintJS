var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var server = express();

// view engine setup

server.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

//set html views as default
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

server.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
server.use('/fonts/', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/fonts')));

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routes);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (server.get('env') === 'development') {
  server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = server;
