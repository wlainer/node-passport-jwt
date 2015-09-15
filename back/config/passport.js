'use strict';

var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var User = require('./../models/userModel');

// local strategy
module.exports = function(passport) {
   passport.serializeUser(function(user, done) {
     done(null, user.id);
   });

   passport.deserializeUser(function(id, done) {
     User.findById(id, function(err, user) {
       done(err, user);
     });
   });

   passport.use('local', new LocalStrategy(
     function(username, password, done) {
       User.findOne({ username: username }, function (err, user) {
         if (err) { return done(err); }
         if (!user) {
           return done(null, false, { message: 'Incorrect username.' });
         }
         if (!user.validPassword(password)) {
           return done(null, false, { message: 'Incorrect password.' });
         }
         return done(null, user);
       });
     }
   ));

//   var JWT_STRATEGY_CONFIG = {
//     secretOrKey: 'secret',
//     issuer : 'testIssuer',
//     nome: 'teste',
//     passReqToCallback: false
// };
var JWT_STRATEGY_CONFIG = {
    secretOrKey: 'secret',
   'issuer': 'myApi',
   'audience': 'Myapi',
    passReqToCallback: false
};

   passport.use('jwt',new JwtStrategy(JWT_STRATEGY_CONFIG, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
}));
};