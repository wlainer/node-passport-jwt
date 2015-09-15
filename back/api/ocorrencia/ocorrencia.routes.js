var express = require('express');
var router = express.Router();

var Empresa = require('./empresa.index');

router.get('/', Empresa.list);

module.exports = router;