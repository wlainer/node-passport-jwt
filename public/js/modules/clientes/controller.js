(function() {

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('ClientesControllerModule', [])
    .controller('FormCtrl', FormCtrl)
    .controller('clienteListController', clienteListController)
    .controller('clienteShowController', clienteShowController);

  function clienteListController(ClientesService) {
    var vm = this;

    vm.title = 'Listagem';

    ClientesService.find()
      .success(function(data) {
        vm.list = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  function clienteShowController(ClientesService, $routeParams) {
    var vm = this;

    vm.title = 'Exibindo Cliente';

    ClientesService.get($routeParams.id)
      .success(function(data) {
        vm.item = data.data;
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
  clienteShowController.$inject = ['ClientesService', '$routeParams'];
  clienteListController.$inject = ['ClientesService'];

})();