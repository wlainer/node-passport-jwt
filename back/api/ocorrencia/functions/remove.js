'use strict';

var Model = require('../ocorrencia.model');

module.exports = function(req, res) {
  var id = req.params.id;
  Model.findByIdAndRemove(id, function(err, ocorrencia) {
    if (err)
      return res.json(500, {msg: 'Error getting Ocorrencia.'});

    return res.status(204).end();
  });
};