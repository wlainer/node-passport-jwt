var db = require('./config/db');
var express = require('express');
// var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var strategy = require('./config/passport')(passport);
// var flash = require('connect-flash');

var api = {};
// api.expose = require('./routes/expose');
// api.index = require('./routes/index');
// api.users = require('./routes/users');
api.clientes = require('./routes/api/clientes');
api.enderecos = require('./routes/api/enderecos');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.set('json spaces', 2);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(flash());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../front/app')));
// app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

// app.use('/', api.index);
// app.use('/expose', api.expose);
// app.use('/users', passport.authenticate('jwt', { session: false}), api.users);
app.use('/api/clientes', api.clientes);

// redirect all others to the index (HTML5 history)
app.get('*', function(req, res, next) {
  res.redirect('/');
});

// var router = express.Router();
// router.route('/login')
//   .get(function(req, res){
//       res.render('login');
//   })
//   .post(passport.authenticate('local', {
//       successRedirect: '/',
//       failureRedirect: '/login',
//       failureFlash: true
//   })
// );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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

// function isLoggedIn(req, res, next) {
//   // if user is authenticated in the session, carry on
//   if (req.user)
//     return next();
//   // if they aren't redirect them to the home page
//   res.redirect('/login');
// }


module.exports = app;