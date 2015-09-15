'use strict';

var expect = require('chai').expect;
var app = require('../../app');
var request = require('supertest');

var Organizacao = require('./organizacao.model');
var config = require('../../config/enviroment');
var urlBase = (config.urlBase + '/organizacoes/');

describe('> API ORGANIZACAO', function() {

  var id = "";

  before(function(done) {
    // Clear users before testing
    Organizacao.remove().exec().then(function() {
      done();
    });
  });

  it('should creates an organizacao', function(done) {
    request(app)
      .post(urlBase)
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

   it('should get an existing organizacao', function(done) {
    request(app)
      .get(urlBase  + id)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
          expect(res.body).to.have.property('nome');
        done();
      });
  });

  it('should get all existing organizacao', function(done) {
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

  it('should updates an existing organizacao', function(done) {
    request(app)
      .put(urlBase + id)
      .set('Accept', 'application/x-www-form-urlencoded')
      .send({
        nome: "Organizacao nome alterado",
      })
      .end(function(err, res) {
        expect(res.body.data.nome).to.equal('Organizacao nome alterado');
        done();
      });
  });

  it('should delete an existing organizacao', function(done) {
    request(app)
      .delete(urlBase + id)
      .expect(204, done);
  });
});