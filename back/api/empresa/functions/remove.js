'use strict';

var Model = require('../empresa.model.js');

module.exports = function(req, res) {
  var id = req.params.id;
  Model.findByIdAndRemove(id, function(err, empresa) {
    if (err)
      return res.json(500, {msg: 'Error getting Empresa.'});

    return res.status(204).end();
  });
};