Model = require('../empresa.model');

module.exports = function(req, res) {
    var empresa = new Model({
        nome: req.body.nome
        , telefone: req.body.telefone
        , email: req.body.email
        , observacao: req.body.observacao
    });
    empresa.save(function(err, empresa) {
        if (err) {
            return res.json(500, {
                message: 'Error saving empresa'
                , error: err
            });
        }
        return res.json({
            message: 'saved'
            , _id: empresa._id
        });
    });
}
