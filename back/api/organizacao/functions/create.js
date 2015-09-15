'use strict';

var Model = require('../organizacao.model');

module.exports = function(req, res){
  var data = new Model({
    nome: req.body.nome
  });

  data.save(function(err){
    if(err)
      return res.status(500).json({err: err});

    res.status(201).json({
      msg: 'Sucessfully created Organizacao'
      , data: data
    });
  });
};