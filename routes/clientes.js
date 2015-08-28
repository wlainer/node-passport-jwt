var express = require('express');
var router = express.Router();
var controller = require('../controllers/clienteController.js');
var util = require('./../utils/util');

/*
 * GET
 */
router.get('/', function(req, res) {
   controller.list(req, res, util.callback);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
   controller.show(req, res, util.callback);
});

/*
 * POST
 */
router.post('/', function(req, res) {
   controller.create(req, res, util.callback);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
   controller.update(req, res, util.callback);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
   controller.remove(req, res, util.callback);
});

module.exports = router;