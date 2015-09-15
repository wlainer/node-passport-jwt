'use strict';

var express = require('express');
var router = express.Router();

var organizacaoRoutes = require('../organizacao/organizacao.routes');
var empresaRoutes = require('../empresa/empresa.routes');
var ocorrenciaRoutes = require('../ocorrencia/ocorrencia.routes');

router.use('/organizacoes', organizacaoRoutes);
router.use('/empresas', empresaRoutes);
router.use('/ocorrencias', ocorrenciaRoutes);

module.exports = router;


