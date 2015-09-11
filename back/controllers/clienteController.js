var async = require('async');
var model = require('../models/clienteModel.js');
var util = require('./../utils/util');

var projection = {
  'endereco': 0,
  'contato': 0,
  'configuracao': 0
};

module.exports = {

  list: function(req, res, cb) {
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
      cb(err, results.two, res, 200);
    });
  },

  show: function(req, res, callback) {
    var id = req.params.id;
    model.findOne({_id: id}, projection, function(err, cliente) {
      callback(err, cliente, res, 200);
    });
  },

  create: function(req, res, callback) {
    var dados = req.body;
    var cliente = new model(dados);

    cliente.save(function(err, cliente) {
      callback(err, cliente, res, 200);
    });
  },

  update: function(req, res, callback) {
    var id = req.params.id;
    var query = {_id: id};
    var mod = req.body;
    // delete mod._id;
    model.update(query, mod, function(err, data) {
      callback(err, data, res, 200);
    });

    // var id = req.params.id;
    // model.findOne({_id: id}, function(err, cliente) {
    //   if (err) {
    //     return res.json(500, {
    //       message: 'Error saving cliente',
    //       error: err
    //     });
    //   }
    //   if (!cliente) {
    //     return res.json(404, {
    //       message: 'No such cliente'
    //     });
    //   }

    //   cliente.nome = req.body.nome ? req.body.nome : cliente.nome;
    //   cliente.telefone = req.body.telefone ? req.body.telefone : cliente.telefone;
    //   cliente.email = req.body.email ? req.body.email : cliente.email;
    //   cliente.observacao = req.body.observacao ? req.body.observacao : cliente.observacao;
    //   cliente.created_at = req.body.created_at ? req.body.created_at : cliente.created_at;

    //   cliente.save(function(err, cliente) {
    //     callback(err, cliente, res, 200);
    //   });
    // });
  },

  remove: function(req, res, callback) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, cliente) {
      callback(err, null, res, 204);
    });
  }
};