'use strict';

var Model = require('../ocorrencia.model');
var _ = require('lodash');

module.exports = function(req, res) {
  var id = req.params.id;

  Model.findOne({_id: id}, function(err, ocorrencia) {
    if (err)
      return res.status(500).json({message: 'Error saving Ocorrencia', error: err });

    if (!ocorrencia)
      return res.status(404).json({message: 'No such Ocorrencia'});

    var dados = req.body;
    delete dados._id;

    _.merge(ocorrencia, dados);

    ocorrencia.save(function(err, ocorrencia) {
      if (err)
        return res.status(500).json({message: 'Error getting Ocorrencia.'});

      if (!ocorrencia)
        return res.status(404).json({message: 'No such Ocorrencia'});

      return res.status(200).json({data: ocorrencia});
    });
  });
};