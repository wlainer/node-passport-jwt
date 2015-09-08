(function() {
  'use strict';

  angular.module('myApp.Clientes', [
      'ui.router',
      'clientesServiceModule',
      'clientesControllerModule',
      'myApp.preventDefault',
      'myApp.goClick'
    ])
    .config(['$stateProvider', clienteConfig]);

  function clienteConfig($stateProvider) {
    $stateProvider
      .state('clientes', {
        url: "/clientes",
        templateUrl: "views/clientes/list.html",
        controller: 'clienteListController',
        controllerAs: 'ctr'
      })
      .state('addClientes', {
        url: "/clientes/add",
        templateUrl: "views/clientes/create.html",
        controller: 'clienteCreateOrUpdateController',
        controllerAs: 'ctr'
      })
      .state('editClientes', {
        url: "/clientes/:id/edit",
        templateUrl: "views/clientes/create.html",
        controller: 'clienteCreateOrUpdateController',
        controllerAs: 'ctr'
      })
      .state('showClientes', {
        url: "/clientes/:id",
        templateUrl: "views/clientes/show.html",
        controller: 'clienteShowController',
        controllerAs: 'ctr'
      });
  }

  clienteConfig.$inject = ['$stateProvider'];
})();