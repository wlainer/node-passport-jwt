'use strict';

var Model = require('../empresa.model.js');
var _ = require('lodash');

module.exports = function(req, res) {
  var id = req.params.id;

  Model.findOne({_id: id}, function(err, empresa) {
    if (err)
      return res.status(500).json({message: 'Error saving Empresa', error: err });

    if (!empresa)
      return res.status(404).json({message: 'No such Empresa'});

    var dados = req.body;
    delete dados._id;

    _.merge(empresa, dados);

    empresa.save(function(err, empresa) {
      if (err)
        return res.status(500).json({message: 'Error getting Empresa.'});

      if (!empresa)
        return res.status(404).json({message: 'No such Empresa'});

      return res.status(200).json({data: empresa});
    });
  });
};