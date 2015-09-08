(function() {
  'use strict';

  angular.module('myApp.Enderecos', [
      // 'ui.router',
      // 'clientesServiceModule',
      // 'clientesControllerModule',
      // 'myApp.preventDefault',
      // 'myApp.goClick'
    ])
    .config(['$stateProvider', clienteConfig]);

  function clienteConfig($stateProvider) {
    // $stateProvider
    //   .state('clientes', {
    //     url: "/clientes",
    //     templateUrl: "views/clientes/list.html",
    //     controller: 'clienteListController',
    //     controllerAs: 'ctr'
    //   })
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

  // function clienteConfig($stateProvider) {
  //   $stateProvider
  //   .when('/clientes/add', {
  //     templateUrl: 'views/clientes/create.html',
  //     controller: 'clienteCreateOrUpdateController as ctr'
  //   })
  //   .when('/clientes/:id/edit', {
  //     templateUrl: 'views/clientes/create.html',
  //     controller: 'clienteEditController as ctr'
  //   })
  //   .when('/clientes/:id', {
  //     templateUrl: 'views/clientes/show.html',
  //     controller: 'clienteShowController as ctr'
  //   })
  //   .when('/clientes', {
  //     templateUrl: 'views/clientes/list.html',
  //     controller: 'clienteListController as ctr'
  //   });
  // }

  clienteConfig.$inject = ['$stateProvider'];

})();