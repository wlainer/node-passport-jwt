 show: function(req, res, callback) {
    var id = req.params.id;
    model.findOne({_id: id}, projection, function(err, cliente) {
      callback(err, cliente, res, 200);
    });
  },