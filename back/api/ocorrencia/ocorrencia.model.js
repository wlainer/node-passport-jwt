'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ocorrencia = new Schema({
    numero: {type: Number}
    , empresa: {type: mongoose.Schema.Types.ObjectId, ref: 'Empresa'}
    , descricao: { type: String, default: ''}
    , contato: { type: String, default: ''}
    , atribuido: { type: String, default: ''}
    , data: { type: Date, default: Date.now }
    , andamento: [{type: String}]
});

module.exports = mongoose.model('Ocorrencia', ocorrencia, 'ocorrencias');