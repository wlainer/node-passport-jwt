'use strict';

var Model = require('../empresa.model');

module.exports = function(req, res) {
  var dados = req.body;
  var empresa = new Model(dados);

  empresa.save(function(err, empresa) {
    if (err)
      return res.status(500).json({err: err});

    res.status(201).json({
      msg: 'Sucessfully created Empresa',
      data: empresa
    });
  });
}