'use strict';

var express = require('express')
 , path = require('path')
 , favicon = require('serve-favicon')
 , logger = require('morgan')
 , bodyParser = require('body-parser')
 // , passport = require('passport')
 // , strategy = require('./passport')(passport);

module.exports = function(app) {
  // view engine setup
  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'jade');
  app.set('json spaces', 2);

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // app.use(flash());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  // app.use(cookieParser());
  app.use(express.static(path.join(__dirname, './../../front/app')));
  // app.use(session({ secret: 'keyboard cat' }));
  // app.use(passport.initialize());
  // app.use(passport.session());

  // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   var err = new Error('Not Found');
  //   err.status = 404;
  //   next(err);
  // });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}