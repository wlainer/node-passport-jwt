'use strict';

var express = require('express');
var router = express.Router();

var empresaRoutes = require('../empresa/empresa.routes');
var organizacaoRoutes = require('../organizacao/organizacao.routes');

router.use('/empresas', empresaRoutes);
router.use('/organizacoes', organizacaoRoutes);


module.exports = router;


