var express = require('express');
var router = express.Router();

var Empresa = require('./empresa.index');

router.get('/', Empresa.list);
router.post('/', Empresa.create);

module.exports = router;