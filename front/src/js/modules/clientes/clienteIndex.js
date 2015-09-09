(function() {
  'use strict';

  angular.module('myApp.Clientes', [
      'ui.router',
      'clientesServiceModule',
      'clientesControllerModule',
      'formControllerModule',
      'myApp.Enderecos',
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
      .state('clientesForm', {
        abstract: true,
        templateUrl: 'views/clientes/create.html',
        controller: 'formController',
        controllerAs: 'parent',
      })
      .state('clientesForm.addClientes', {
        url: "/clientes/add",
        templateUrl: "views/clientes/form-pessoal.html",
        controller: 'clienteCreateOrUpdateController',
        controllerAs: 'ctr'
      })
      .state('clientesForm.editClientes', {
        url: "/clientes/:id/edit",
        templateUrl: "views/clientes/form-pessoal.html",
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