var express = require('express');
var router = express.Router({mergeParams: true});
var controller = require('./../../controllers/enderecoController.js');
var util = require('./../../utils/util');

router.get('/', function(req, res) {
   controller.list(req, res, util.callback);
});

router.get('/:enderecoId', function(req, res) {
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

module.exports = router;