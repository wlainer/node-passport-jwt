'use strict';

var express = require('express');
var router = express.Router();

var Empresa = require('./empresa.index');

router.get('/', Empresa.list);
router.post('/', Empresa.create);
router.get('/:id', Empresa.read);
router.put('/:id', Empresa.update);
router.delete('/:id', Empresa.remove);

module.exports = router;