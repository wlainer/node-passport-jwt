(function() {
   'use strict';

   // Declare app level module which depends on filters, and services

   angular.module('myApp', ['ngRoute',
      'myApp.controllers',
      // 'myApp.filters',
      // 'myApp.services',
      // 'myApp.directives'
   ]).config(['$routeProvider', '$locationProvider', appConfig]);

   function appConfig($routeProvider, $locationProvider) {
      $routeProvider.
      when('/clientes', {
         templateUrl: 'expose/clientes/list',
         controller: 'ClienteListController'
      }).
      otherwise({
         redirectTo: '/clientes'
      });

      $locationProvider.html5Mode(true);
   }

   appConfig.$inject = ['$routeProvider', '$locationProvider'];

}());