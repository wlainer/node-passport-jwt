(function() {

  'use strict';

  angular.module('enderecoServiceModule', [])
    .service('enderecoService', enderecoService)
    .service('recuperarEnderecoService', recuperarEnderecoService);

  function enderecoService($http) {
    var urlBase = '//localhost:3000/api/clientes';

    this.find = function(id) {
      return $http.get(urlBase + '/' + id + '/enderecos');
    };

    this.get = function(clienteId, enderecoId) {
      return $http.get(urlBase + '/' + clienteId + '/enderecos/' + enderecoId);
    };

    this.create = function(clienteId, data) {
      return $http.post(urlBase + '/' + clienteId + '/enderecos', data);
    };

    this.update = function(data) {
      return $http.put(urlBase + '/' + data._id, data);
    };

    this.remove = function(clienteId, enderecoId) {
      return $http.delete(urlBase + '/' + clienteId + '/enderecos/' + enderecoId);
    };
  };

  function recuperarEnderecoService($http) {
    var urlBase = 'http://api.postmon.com.br/v1/cep';

    this.get = function(cep) {
      return $http.get(urlBase + '/' + cep);
    };

  };

  enderecoService.$inject = ['$http'];
  recuperarEnderecoService.$inject = ['$http'];

})();