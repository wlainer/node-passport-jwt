(function() {

  'use strict';

  angular.module('myApp.Organizacao.ServiceModule', [])
    .service('organizacaoService', organizacaoService);

  function organizacaoService($http, myConfig) {
    var urlBase = myConfig.url + '/organizacoes';

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

  organizacaoService.$inject = ['$http', 'myConfig'];
})();