module.exports = {
   paginate: function(req, model, callback) {
      var query = model.find({});
      query.skip(req.query.skip).limit(req.query.limit).exec('find', callback);
   },

   callback: function(err, data, res) {
      var msg = {};
      if (err) {
         msg = '{Erro: ' + err + '}';
         msg.status = "error";
      } else {
         msg.data = data;
         msg.status = "success";
      }
      // console.log(msg);
      res.json(msg);
   }
};