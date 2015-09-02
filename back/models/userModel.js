var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
   username: String,
   password: String
});

userSchema.methods.validPassword = function(password) {
   return this.password === password;
};

module.exports = mongoose.model("User", userSchema, "users");