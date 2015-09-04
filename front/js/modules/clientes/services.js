(function() {

  'use strict';

  angular.module('ClientesServiceModule', [])
    .service('ClientesService', ClientesService)
    .service('recuperarEndereco', recuperarEndereco);

  function ClientesService($http) {
    var urlBase = '//localhost:3000/api/clientes';

    this.find = function() {
      return $http.get(urlBase);
    };

    this.get = function(id) {
      return $http.get(urlBase + '/' + id);
    };

    this.create = function(data) {
      return $http.post(urlBase, data);
    };

    this.update = function(data) {
      return $http.put(urlBase + '/' + data._id, data);
    };

    this.remove = function(data) {
      return $http.delete(urlBase + '/' + data._id, data);
    };
  };

  function recuperarEndereco($http) {
    var urlBase = 'http://api.postmon.com.br/v1/cep';

    this.find = function(cep) {
      return $http.get(urlBase + '/' + cep);
    };

  };

  ClientesService.$inject = ['$http'];
  recuperarEndereco.$inject = ['$http'];

})();