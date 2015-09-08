(function() {
  'use strict';

  // Declare app level module which depends on filters, and services

  angular.module('myApp', [
    'ui.router',
    'myApp.Clientes',
    'flash'
    // 'myApp.filters',
    // 'myApp.services',
    // 'myApp.directives'
  ]).
  config(['$urlRouterProvider', '$locationProvider', myAppConfig]);

  function myAppConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/clientes');
    $locationProvider.html5Mode(true);
  }

  myAppConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

}());