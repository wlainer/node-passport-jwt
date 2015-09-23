(function() {
  'use strict';

  // Declare app level module which depends on filters, and services

  angular.module('myApp', [
    'ui.router',
    'myApp.Organizacao'
    // 'myApp.Clientes',
    // 'flash'
    // 'myApp.filters',
    // 'myApp.services',
    // 'myApp.directives'
  ]).
  constant("myConfig", {
        "url": "http://localhost:3000/api/v1"
  }).
  config(['$urlRouterProvider', '$locationProvider', myAppConfig]);

  function myAppConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/organizacoes');
    $locationProvider.html5Mode(true);
  }

  myAppConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

}());