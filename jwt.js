var jwt = require('jsonwebtoken');

var payload = {
   'iss': 'myApi',
   'aud': 'Myapi'
};

var secret = 'secret';

var options = {
   'user' : 1
};

console.log(jwt.sign(payload, secret, options));