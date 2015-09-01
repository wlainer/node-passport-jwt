(function() {

  'use strict';

  angular.module('ClientesServiceModule', [])
    .service('ClientesService', ClientesService);

  function ClientesService($http) {
    var urlBase = '//localhost:3000/api/clientes';

    this.items = [];

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

  ClientesService.$inject = ['$http'];

})();