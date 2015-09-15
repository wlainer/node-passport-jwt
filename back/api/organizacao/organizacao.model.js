'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizacao = new Schema({
   nome: {type: String, default: ''},
   empresas: [{type: mongoose.Schema.Types.ObjectId, ref: 'Empresa'}]
});

module.exports = mongoose.model('Organizacao', organizacao, 'organizacoes');