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
         templateUrl: 'js/modules/clientes/views/list.html',
         controller: 'clienteListController as ctr'
      })
      .when('/clientes/:id', {
         templateUrl: 'js/modules/clientes/views/show.html',
         controller: 'clienteShowController as ctr'
      });
   }]);

})();