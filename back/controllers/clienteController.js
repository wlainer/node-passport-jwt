var model = require('../models/clienteModel.js');
var util = require('./../utils/util');
/**
 * clienteController.js
 *
 * @description :: Server-side logic for managing clientes.
 */
module.exports = {

    /**
     * clienteController.list()
     */
    list: function(req, res, callback) {
        util.paginate(req, model, function(err, clientes){
            callback(err, clientes, res);
        });        
    },

    /**
     * clienteController.show()
     */
    show: function(req, res, callback) {
        var id = req.params.id;
        model.findOne({_id: id}, function(err, cliente){
            callback(err, cliente, res);
        });
    },

    /**
     * clienteController.create()
     */
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

    /**
     * clienteController.update()
     */
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
			cliente.descricao =  req.body.descricao ? req.body.descricao : cliente.descricao;
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

    /**
     * clienteController.remove()
     */
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