var express = require('express');
var enderecos = require('./enderecos');
var router = express.Router();
var controller = require('./../../controllers/clienteController.js');
var util = require('./../../utils/util');

router.get('/', function(req, res) {
   controller.list(req, res, util.callback);
});

router.get('/:id', function(req, res) {
   controller.show(req, res, util.callback);
});

router.post('/', function(req, res) {
   controller.create(req, res, util.callback);
});

router.put('/:id', function(req, res) {
   controller.update(req, res, util.callback);
});

router.delete('/:id', function(req, res) {
   controller.remove(req, res, util.callback);
});

router.use('/:clienteId/enderecos', enderecos);


module.exports = router;