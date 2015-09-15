'use strict';

var express = require('express');
var router = express.Router();

var Cliente = require('./organizacao.index');

router.get('/', Cliente.list);
router.post('/', Cliente.create);
router.get('/:id', Cliente.read);
router.put('/:id', Cliente.update);
router.delete('/:id', Cliente.remove);

module.exports = router;