(function() {
   'use strict';

   angular.module('myApp.Clientes', [
      'ngRoute',
      'ClientesServiceModule',
      'ClientesControllerModule'
   ])
   .config(['$routeProvider', clienteConfig]);

   function clienteConfig($routeProvider) {
      $routeProvider
      .when('/clientes/add', {
         templateUrl: 'js/modules/clientes/views/create.html',
         controller: 'clienteCreateController as ctr'
      })
      .when('/clientes/:id/edit', {
         templateUrl: 'js/modules/clientes/views/show.html',
         controller: 'clienteShowController as ctr'
      })
      .when('/clientes/:id', {
         templateUrl: 'js/modules/clientes/views/show.html',
         controller: 'clienteShowController as ctr'
      })
      .when('/clientes', {
         templateUrl: 'js/modules/clientes/views/list.html',
         controller: 'clienteListController as ctr'
      });
   }

   clienteConfig.$inject = ['$routeProvider'];

})();