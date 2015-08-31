var sentence = ["This", "is", "formed", "using", "reduce"];

var msg = sentence.reduce(function(msg, word) {
   return msg + word + " ";
}, "");

console.log(msg);