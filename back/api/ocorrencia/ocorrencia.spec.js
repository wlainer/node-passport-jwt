'use strict';

var expect = require('chai').expect;
var app = require('../../app');
var request = require('supertest');

var Ocorrencia = require('./ocorrencia.model');
var config = require('../../config/enviroment');
var urlBase = (config.urlBase + '/ocorrencias/');

describe('> API OCORRENCIA', function() {

  var id = "";

  before(function(done) {
    // Clear users before testing
    Ocorrencia.remove().exec().then(function() {
      done();
    });
  });

  it('should creates an ocorrencia', function(done) {
    request(app)
      .post(urlBase)
      .set('Accept', 'application/json')
      .send({
        numero: 1
        , descricao: "descricao teste"
        , conato: "conato teste"
        , atribuido: "atribuido teste"
        , data: new Date
        , andamento: [
          "andamento teste"
        ]
      })
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        id = res.body.data._id;
        done();
      });
  });

 it('should get an existing ocorrencia', function(done) {
  request(app)
    .get(urlBase + id)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      if (err) return done(err);

      expect(res.body).to.have.property('descricao');
      expect(res.body).to.have.property('contato');
      expect(res.body).to.have.property('atribuido');
      expect(res.body).to.have.property('andamento');
      done();
    });
});

it('should get all existing ocorrencia', function(done) {
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


  it('should updates an existing ocorrencia', function(done) {
    request(app)
      .put(urlBase + id)
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        descricao: "descricao alterado",
        contato: "contato alterado",
        atribuido: "atribuido alterado"
      })
      .end(function(err, res) {
        expect(res.body.data.descricao).to.equal('descricao alterado');
        expect(res.body.data.contato).to.equal('contato alterado');
        expect(res.body.data.atribuido).to.equal('atribuido alterado');
        done();
      });
  });

  it('should delete an existing ocorrencia', function(done) {
    request(app)
      .delete(urlBase + id)
      .expect(204, done);
  });
});