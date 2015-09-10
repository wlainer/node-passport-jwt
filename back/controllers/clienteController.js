var model = require('../models/clienteModel.js');
var util = require('./../utils/util');

var projection = {'endereco': 0, 'contato': 0, 'configuracao': 0};

module.exports = {

    list: function(req, res, callback) {
        util.paginate(req, model, {}, projection, function(err, clientes){
            callback(err, clientes, res);
        });
    },

    show: function(req, res, callback) {
        var id = req.params.id;
        model.findOne({_id: id}, projection, function(err, cliente){
            callback(err, cliente, res);
        });
    },

    create: function(req, res, callback) {
        var dados = req.body;
        var cliente = new model(dados);

        cliente.save(function(err, cliente){
            if(err) {
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
        model.findOne({_id: id}, function(err, cliente){
            if(err) {
                return res.json(500, {
                    message: 'Error saving cliente',
                    error: err
                });
            }
            if(!cliente) {
                return res.json(404, {
                    message: 'No such cliente'
                });
            }

            cliente.nome =  req.body.nome ? req.body.nome : cliente.nome;
            cliente.telefone =  req.body.telefone ? req.body.telefone : cliente.telefone;
            cliente.email =  req.body.email ? req.body.email : cliente.email;
			cliente.observacao =  req.body.observacao ? req.body.observacao : cliente.observacao;
			cliente.created_at =  req.body.created_at ? req.body.created_at : cliente.created_at;

            cliente.save(function(err, cliente){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting cliente.'
                    });
                }
                if(!cliente) {
                    return res.json(404, {
                        message: 'No such cliente'
                    });
                }
                return res.json(cliente);
            });
        });
    },

    remove: function(req, res, callback) {
        var id = req.params.id;
        model.findByIdAndRemove(id, function(err, cliente){
            if(err) {
                return res.json(500, {
                    message: 'Error getting cliente.'
                });
            }
            return res.json(cliente);
        });
    }
};