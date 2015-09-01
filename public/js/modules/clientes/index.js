(function() {
   'use strict';

   angular.module('myApp.Clientes', [
      'ngRoute',
      'ClientesServiceModule',
      'ClientesControllerModule'
   ])

   .config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/clientes', {
         templateUrl: 'expose/clientes/list',
         controller: 'clienteListController'
      })
      .when('/clientes/:id', {
         templateUrl: 'expose/clientes/show',
         controller: 'clienteShowController'
      });
   }]);

})();