(function() {
  'use strict';

  angular.module('myApp.Organizacao', [
      'myApp.Organizacao.ServiceModule',
      'myApp.Organizacao.ControllerModule'
    ])
    .config(['$stateProvider', organizacaoConfig]);

  function organizacaoConfig($stateProvider) {
    $stateProvider
      .state('organizacao', {
        url: "/organizacoes",
        templateUrl: "views/organizacao/list.html",
        controller: 'organizacaoListController',
        controllerAs: 'ctr'
      })
      .state('organizacaoCreate', {
        url: '/organizacoes/add',
        templateUrl: 'views/organizacao/form.html',
        controller: 'organizacaoCreateOrUpdateController',
        controllerAs: 'ctr',
      });
  }

  organizacaoConfig.$inject = ['$stateProvider'];
})();