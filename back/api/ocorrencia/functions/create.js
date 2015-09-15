'use strict';

var Model = require('../ocorrencia.model');

module.exports = function(req, res) {
  var dados = req.body;
  var ocorrencia = new Model(dados);

  ocorrencia.save(function(err, ocorrencia) {
    if (err)
      return res.status(500).json({err: err});

    res.status(201).json({
      msg: 'Sucessfully created Ocorrencia',
      data: ocorrencia
    });
  });
};