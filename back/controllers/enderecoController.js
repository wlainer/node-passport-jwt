var model = require('../models/clienteModel.js');
var util = require('./../utils/util');

module.exports = {

  list: function(req, res, callback) {
    util.paginate(req, model, {
      '_id': req.params.clienteId
    }, {
      'endereco': 1
    }, function(err, clientes) {
      var enderecos = clientes[0].endereco;
      callback(err, enderecos, res);
    });
  },

  show: function(req, res, callback) {
    var clienteId = req.params.clienteId;
    var enderecoId = req.params.enderecoId;
    model.findOne({
      _id: clienteId
    }, function(err, cliente) {
      var endereco = cliente.endereco.id(enderecoId);
      callback(err, endereco, res);
    });
  },

  create: function(req, res, callback) {
    var dados = req.body;
    var cliente = new model(dados);

    cliente.save(function(err, cliente) {
      if (err) {
        return res.json(500, {
          message: 'Error saving cliente',
          error: err
        });
      }
      return res.json({
        message: 'saved',
        _id: cliente._id
      });
    });
  },

  update: function(req, res, callback) {
    var id = req.params.id;
    model.findOne({
      _id: id
    }, function(err, cliente) {
      if (err) {
        return res.json(500, {
          message: 'Error saving cliente',
          error: err
        });
      }
      if (!cliente) {
        return res.json(404, {
          message: 'No such cliente'
        });
      }

      cliente.nome = req.body.nome ? req.body.nome : cliente.nome;
      cliente.descricao = req.body.descricao ? req.body.descricao : cliente.descricao;
      cliente.created_at = req.body.created_at ? req.body.created_at : cliente.created_at;

      cliente.save(function(err, cliente) {
        if (err) {
          return res.json(500, {
            message: 'Error getting cliente.'
          });
        }
        if (!cliente) {
          return res.json(404, {
            message: 'No such cliente'
          });
        }
        return res.json(cliente);
      });
    });
  },

  remove: function(req, res, callback) {
    var clienteId = req.params.clienteId;
    var enderecoId = req.params.enderecoId;

    model.findOne({_id: clienteId}, function(err, cliente) {
      if (err) {
        return res.json(500, {
          message: 'Error getting cliente.'
        });
      }

      if (!!cliente.endereco.id(enderecoId)) {
        cliente.endereco.id(enderecoId).remove();
        cliente.save(function(err, cliente) {
          if (err) {
            return res.json(500, {
              message: 'Error deleting endereço.'
            });
          }
          res.json(204, {
            message: 'Successfully deleted'
          });
        });
      } else {
        res.json(500, {message: "Resource doesn't exist"});
      }
    });
  }
};