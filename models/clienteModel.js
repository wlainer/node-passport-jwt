var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var clienteSchema = new Schema({
	nome : String,
	descricao : String,
   created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Cliente', clienteSchema, 'clientes');