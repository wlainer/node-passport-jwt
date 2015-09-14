'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var app = require('../../app');
var request = require('supertest');

var Organizacao = require('./organizacao.model');

describe('API Organizacao', function() {

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
      .expect(201, done);
  });

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/v1/organizacoes')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.data.should.be.instanceof(Array);
        done();
      });
  });

  it('should be updated with a new name', function(done) {
    request(app)
      .get('/api/v1/organizacoes')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        request(app)
          .put('/api/v1/organizacoes/' + res.body.data[0]._id)
          .set('Accept', 'application/x-www-form-urlencoded')
          .send({
            nome: "Organizacao nome alterado",
          })
          .end(function(err, res) {
            expect(res.body.data.nome).to.equal('Organizacao nome alterado');
            done();
          });
      });
  });
});