var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var endereco = new Schema({
   logradouro: {type: String, default: ''},
   complemento: {type: String, default: ''},
   bairro: {type: String, default: ''},
   cidade: {type: String, default: ''},
   estado: {type: String, default: ''}
});

var contato = new Schema({
   nome: { type: String, default: ''},
   email: { type: String, default: ''},
   telefone: { type: String, default: ''},
   setor: { type: String, default: ''}
});

var configuracao = new Schema({
   descricao: { type: String, default: ''},
   servidor: { type: String, default: ''},
   porta: { type: String, default: ''},
   endereco_web: { type: String, default: ''}
});

var cliente = new Schema({
    nome: { type: String, default: ''},
    telefone: { type: String, default: ''},
    email: { type: String, default: ''},
    observacao: { type: String, default: ''},
    endereco: [endereco],
    contato: [contato],
    configuracao: [configuracao]
});

module.exports = mongoose.model('Cliente', cliente, 'clientes');