'use strict';

var expect = require('chai').expect;
var app = require('../../app');
var request = require('supertest');

var Empresa = require('./empresa.model');
var config = require('../../config/environment');
var urlBase = (config.urlBase + '/empresas/');

describe('> API EMPRESA', function() {

  var id = "";

  before(function(done) {
    // Clear users before testing
    Empresa.remove().exec().then(function() {
      done();
    });
  });

  it('should creates an empresa', function(done) {
    request(app)
      .post(urlBase)
      .set('Accept', 'application/json')
      .send({
         nome: "John Snow",
         telefone: "31 8888 9999",
         email: "john@gmail.com",
         observacao: "observacao teste",
         endereco: [{
            logradouro: "rua senador firmino",
            complemento: "ap 203",
            bairro: "ouro preto",
            cidade: "belo horizonte",
            estado: "minas gerais"
         }],
         contato: [{
            nome: "maria",
            email: "maria@gmail.com",
            telefone: "11 2222 3333",
            setor: "administrativo"
         }],
         servidor: [{
            nome: "servidor teste",
            tipo: "web",
            ip: "127.0.0.1",
            porta: "8080",
            host: "localhost",
            usuario: "user",
            senha: "user"
         }]
      })
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        id = res.body.data._id;
        done();
      });
  });

 it('should get an existing empresa', function(done) {
  request(app)
    .get(urlBase + id)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);

      expect(res.body).to.have.property('nome');
      expect(res.body).to.have.property('contato');
      expect(res.body).to.have.property('endereco');
      expect(res.body).to.have.property('servidor');
      done();
    });
});

it('should get all existing empresa', function(done) {
  request(app)
    .get(urlBase)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);

      expect(res.body.data).to.be.instanceof(Array);
      done();
    });
});


  it('should updates an existing empresa', function(done) {
    request(app)
      .put(urlBase + id)
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        nome: "nome alterado",
        email: "email alterado",
        telefone: "telefone alterado",
        observacao: "observacao alterado"
      })
      .end(function(err, res) {
        expect(res.body.data.nome).to.equal('nome alterado');
        expect(res.body.data.email).to.equal('email alterado');
        expect(res.body.data.telefone).to.equal('telefone alterado');
        expect(res.body.data.observacao).to.equal('observacao alterado');
        done();
      });
  });

  it('should delete an existing empresa', function(done) {
    request(app)
      .delete(urlBase + id)
      .expect(204, done);
  });
});