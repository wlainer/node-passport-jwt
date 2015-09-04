(function() {
   'use strict';

   // Declare app level module which depends on filters, and services

   angular.module('myApp', [
      'ngRoute',
      'myApp.Clientes',
      // 'myApp.filters',
      // 'myApp.services',
      // 'myApp.directives'
   ]).
   config(['$routeProvider', '$locationProvider', myAppConfig]);

   function myAppConfig($routeProvider, $locationProvider) {
      $routeProvider.otherwise({redirectTo: '/clientes'});
      $locationProvider.html5Mode(true);
   }

   myAppConfig.$inject = ['$routeProvider', '$locationProvider'];

}());