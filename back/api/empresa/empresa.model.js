var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var endereco = new Schema({
   logradouro: {type: String, default: ''}
   , complemento: {type: String, default: ''}
   , cep: {type: String, default: ''}
   , bairro: {type: String, default: ''}
   , cidade: {type: String, default: ''}
   , estado: {type: String, default: ''}
});

var contato = new Schema({
   nome: { type: String, default: ''}
   , email: { type: String, default: ''}
   , telefone: { type: String, default: ''}
   , setor: { type: String, default: ''}
});

var servidor = new Schema({
   nome: { type: String, default: ''}
   , tipo: { type: String, default: ''}
   , ip: { type: String, default: ''}
   , porta: { type: String, default: ''}
   , host: { type: String, default: ''}
   , usuario: { type: String, default: ''}
   , senha: { type: String, default: ''}
});

var empresa = new Schema({
    nome: { type: String, default: ''}
    , telefone: { type: String, default: ''}
    , email: { type: String, default: ''}
    , observacao: { type: String, default: ''}
    , endereco: [endereco]
    , contato: [contato]
    , servidor: [servidor]
});

module.exports = mongoose.model('Empresa', empresa, 'empresas');