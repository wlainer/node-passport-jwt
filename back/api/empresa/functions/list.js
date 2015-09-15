var Model = require("../empresa.model");

module.exports = function(req, res){
  Model.find(function(err, data){
    if(err)
      return res.status(500).json({err: err});

    if(data.length === 0)
      return res.status(500).json({msg: 'No records found.'});

    res.status(200).json({data: data});
  })
}