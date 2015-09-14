var Model = require('../organizacao.model.js');

module.exports = function(req, res) {
  var id = req.params.id;

  Model.findOne({_id: id}, function(err, organizacao) {
    if (err)
      return res.status(500).json({message: 'Error saving organizacao', error: err });

    if (!organizacao)
      return res.status(404).json({message: 'No such organizacao'});

    organizacao.nome = req.body.nome ? req.body.nome : organizacao.nome;

    organizacao.save(function(err, organizacao) {
      if (err)
        return res.status(500).json({message: 'Error getting organizacao.'});

      if (!organizacao)
        return res.status(404).json({message: 'No such organizacao'});

      return res.status(200).json({data: organizacao});
    });
  });
};