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
        url: "/clientes/:id/enderecos",
        templateUrl: "views/clientes/form-endereco.html",
        controller: 'enderecoController',
        controllerAs: 'ctr'
      })
    //   .state('addClientes', {
    //     url: "/clientes/add",
    //     templateUrl: "views/clientes/create.html",
    //     controller: 'clienteCreateOrUpdateController',
    //     controllerAs: 'ctr'
    //   })
    //   .state('editClientes', {
    //     url: "/clientes/:id/edit",
    //     templateUrl: "views/clientes/create.html",
    //     controller: 'clienteEditController',
    //     controllerAs: 'ctr'
    //   })
    //   .state('showClientes', {
    //     url: "/clientes/:id",
    //     templateUrl: "views/clientes/show.html",
    //     controller: 'clienteShowController',
    //     controllerAs: 'ctr'
    //   })
  }
  // }

  enderecoConfig.$inject = ['$stateProvider'];

})();