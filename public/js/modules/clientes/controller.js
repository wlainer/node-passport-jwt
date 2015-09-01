(function() {

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('ClientesControllerModule', [])
    .controller('FormCtrl', FormCtrl)
    .controller('clienteListController', clienteListController)
    .controller('clienteShowController', clienteShowController);

  function clienteListController($scope, ClientesService) {
    $scope.title = 'Listagem';

    ClientesService.find()
      .success(function(data) {
        ClientesService.items = data.data;
        console.log(ClientesService.items);
        $scope.list = ClientesService.items;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  function clienteShowController($scope, ClientesService, $routeParams) {
    $scope.title = 'Consulta de Groups';

    ClientesService.get($routeParams.id)
      .success(function(data) {
        $scope.item = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  function FormCtrl($scope, ClientesService) {
    $scope.title = 'Form de Office';

    $scope.save = function(form) {
      ClientesService.create(form)
        .success(function(data) {
          $scope.Model = data;
          ClientesService.items.push(data);
          console.log('Sucesso', data);
        })
        .error(function(err) {
          console.log('Erro', err);
        });
    }
  }

  FormCtrl.$inject = ['$scope', 'ClientesService'];
  clienteShowController.$inject = ['$scope', 'ClientesService', '$routeParams'];
  clienteListController.$inject = ['$scope', 'ClientesService'];

})();