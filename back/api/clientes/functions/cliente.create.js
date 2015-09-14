create: function(req, res, callback) {
    var dados = req.body;
    var cliente = new model(dados);

    cliente.save(function(err, cliente) {
      callback(err, cliente, res, 200);
    });
  },