(function() {
   'use strict';

   angular.module('controllers.Clientes', []).
   controller('ClienteListController', ClienteListController);

   function ClienteListController($scope) {
      $scope.message = 'test from controller';
   }

   ClienteListController.$inject = ['$scope'];
}());