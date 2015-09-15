'use strict';

var Model = require('../empresa.model.js');

module.exports = function(req, res) {
  var id = req.params.id;
  Model.findOne({_id: id}, function(err, empresa) {
    if (err)
      return res.status(500).json({msg: 'Error getting Empresa.'});

    if (!empresa)
      return res.status(404).json({msg: 'No such Empresa'});

    return res.status(200).json(empresa);
  });
};