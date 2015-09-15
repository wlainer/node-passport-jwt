'use strict';

module.exports = {
  paginate: function(req, model, query, projection, callback) {
    var query = model.find(query);
    query.skip(req.query.skip).limit(req.query.limit).select(projection).exec('find', callback);
  },

  callback: function(err, data, res, code) {
    var msg = {};
    if (!!code) code = 200;
    if (err) {
      msg = '{Erro: ' + err + '}';
      msg.status = "error";
      code = 500;
    } else {
      if (!!data)
        msg.data = data;
      msg.status = "success";
    }
    // console.log(msg);
    res.json(msg);
  }
};