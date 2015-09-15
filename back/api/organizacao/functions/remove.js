'use strict';

var Model = require('../organizacao.model.js');

module.exports = function(req, res) {
  var id = req.params.id;
  Model.findByIdAndRemove(id, function(err, organizacao) {
    if (err)
      return res.json(500, {msg: 'Error getting Organizacao.'});

    return res.status(204).end();
  });
};