'use strict';

var Model = require('../ocorrencia.model');

module.exports = function(req, res) {
  var id = req.params.id;
  Model.findOne({_id: id}, function(err, ocorrencia) {
    if (err)
      return res.status(500).json({msg: 'Error getting Ocorrencia.'});

    if (!ocorrencia)
      return res.status(404).json({msg: 'No such Ocorrencia'});

    return res.status(200).json(ocorrencia);
  });
};