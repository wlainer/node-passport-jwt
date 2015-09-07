(function() {
  'use strict';

  angular.module('myApp.Clientes', [
    'ngRoute',
    'ClientesServiceModule',
    'ClientesControllerModule',
    'myApp.preventDefault',
    'myApp.goClick'
  ])
  .config(['$routeProvider', clienteConfig]);

  function clienteConfig($routeProvider) {
    $routeProvider
    .when('/clientes/add', {
      templateUrl: 'views/clientes/create.html',
      controller: 'clienteCreateController as ctr'
    })
    .when('/clientes/:id/edit', {
      templateUrl: 'views/clientes/create.html',
      controller: 'clienteEditController as ctr'
    })
    .when('/clientes/:id', {
      templateUrl: 'views/clientes/show.html',
      controller: 'clienteShowController as ctr'
    })
    .when('/clientes', {
      templateUrl: 'views/clientes/list.html',
      controller: 'clienteListController as ctr'
    });
  }

  clienteConfig.$inject = ['$routeProvider'];

})();