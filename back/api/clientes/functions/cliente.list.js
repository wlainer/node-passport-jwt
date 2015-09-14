var async = require('async');
var model = require('../clientes.model.js');
var util = require('./../../../utils/util');

var projection = {
  'endereco': 0,
  'contato': 0,
  'configuracao': 0
};

module.exports = function(req, res) {
  async.parallel({
    one: function(callback) {
      model.count({}, function(err, count) {
        if (err) callback(err);

        callback(null, count);
      });
    },
    two: function(callback) {
      util.paginate(req, model, {}, projection, function(err, clientes) {
        if (err) callback(err);

        callback(null, clientes);
      });
    }
  }, function(err, results) {
    res.set('X-Total-Count', results.one);
    res.status(200).json({
      data: results.two
    });
  });
}