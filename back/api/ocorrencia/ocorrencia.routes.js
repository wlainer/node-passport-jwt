'use strict';

var express = require('express');
var router = express.Router();

var Ocorrencia = require('./ocorrencia.index');

router.get('/', Ocorrencia.list);
router.get('/:id', Ocorrencia.read);
router.post('/', Ocorrencia.create);
router.delete('/:id', Ocorrencia.remove);
router.put('/:id', Ocorrencia.update);

module.exports = router;