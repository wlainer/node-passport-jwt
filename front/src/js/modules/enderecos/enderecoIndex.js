(function() {
  'use strict';

  angular.module('myApp.Enderecos', [
      'enderecoServiceModule',
      'enderecoControllerModule',
    ])
    .config(['$stateProvider', enderecoConfig]);

  function enderecoConfig($stateProvider) {
    $stateProvider
      .state('clientesForm.enderecos', {
        url: "/clientes/:clienteId/enderecos",
        templateUrl: "views/enderecos/enderecos.html",
        controller: 'enderecoController',
        controllerAs: 'ctr'
      })
  }

  enderecoConfig.$inject = ['$stateProvider'];

})();