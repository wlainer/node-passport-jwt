var express = require('express');
var router = express.Router();

var Cliente = require('./clientes.index');

router.get('/', Cliente.list);

module.exports = router;