(function() {
  'use strict';

  angular.module('myApp.Enderecos', [
      'ui.router',
      'enderecoServiceModule',
      'enderecoControllerModule',
      // 'myApp.preventDefault',
      // 'myApp.goClick'
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