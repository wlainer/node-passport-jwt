'use strict';

var express = require('express');
var router = express.Router();
var auth = require('../../auth/auth.service');

var organizacaoRoutes = require('../organizacao/organizacao.routes');
var empresaRoutes = require('../empresa/empresa.routes');
var ocorrenciaRoutes = require('../ocorrencia/ocorrencia.routes');
var userRoutes = require('../user/user.routes');

router.use('/api/users', userRoutes);
router.use('/organizacoes', organizacaoRoutes);
router.use('/empresas', empresaRoutes);
router.use('/ocorrencias', ocorrenciaRoutes);

module.exports = router;


