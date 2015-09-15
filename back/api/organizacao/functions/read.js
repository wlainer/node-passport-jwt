'use strict';

var Model = require('../organizacao.model.js');

module.exports = function(req, res) {
  var id = req.params.id;
  Model.findOne({_id: id}, function(err, organizacao) {
    if (err)
      return res.status(500).json({msg: 'Error getting Organizacao.'});

    if (!organizacao)
      return res.status(404).json({msg: 'No such Organizacao'});

    return res.status(200).json(organizacao);
  });
};