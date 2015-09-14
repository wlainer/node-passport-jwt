'use strict';

var express = require('express');
var router = express.Router();

var clienteRoutes = require('../clientes/clientes.routes');
var organizacaoRoutes = require('../organizacao/organizacao.routes');

router.use('/clientes', clienteRoutes);
router.use('/organizacoes', organizacaoRoutes);


module.exports = router;


