remove: function(req, res, callback) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err, cliente) {
      callback(err, null, res, 204);
    });
  }