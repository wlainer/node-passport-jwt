'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var app = require('../../app');
var request = require('supertest');

var Organizacao = require('./organizacao.model');

describe('API Organizacao', function() {

  var id = "";

  before(function(done) {
    // Clear users before testing
    Organizacao.remove().exec().then(function() {
      done();
    });
  });

  it('should return a 200 response', function(done) {
    request(app)
      .post('/api/v1/organizacoes')
      .set('Accept', 'application/json')
      .send({
        nome: 'Organizacao Teste'
      })
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        id = res.body.data._id;
        done();
      });
  });

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1/organizacoes')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.data).to.be.instanceof(Array);
        done();
      });
  });

  it('should be updated with a new name', function(done) {
    request(app)
      .put('/api/v1/organizacoes/' + id)
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        nome: "Organizacao nome alterado",
      })
      .end(function(err, res) {
        expect(res.body.data.nome).to.equal('Organizacao nome alterado');
        done();
      });
  });

  it('should remove an object', function(done) {
    request(app)
      .delete('/api/v1/organizacoes/' + id)
      .expect(200, done);
  });
});