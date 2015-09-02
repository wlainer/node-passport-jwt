(function() {

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('ClientesControllerModule', [])
    .controller('clienteCreateController', clienteCreateController)
    .controller('clienteListController', clienteListController)
    .controller('clienteShowController', clienteShowController);

  function clienteCreateController(ClientesService) {
    var vm = this;

    vm.title = 'Cadastrando novo Cliente';
    vm.cliente = {};

    vm.endereco = {};
    vm.enderecos = [];

    vm.adicionaCliente = function(cliente) {
      ClientesService.create(cliente)
        .success(function(data) {
          console.log('Cliente gravado com sucesso.');
        })
        .error(function(err) {
          console.log('Ocorreu um erro ao gravar o cliente.');
        });
    };

    vm.adicionaEndereco = function(endereco) {
      vm.enderecos.push(angular.copy(endereco));
      vm.endereco = {};
    };


  }

  function clienteListController(ClientesService) {
    var vm = this;

    vm.title = 'Listagem de Clientes';

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

    vm.title = 'Exibindo Dados do Cliente';

    ClientesService.get($routeParams.id)
      .success(function(data) {
        vm.item = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  clienteShowController.$inject = ['ClientesService', '$routeParams'];
  clienteListController.$inject = ['ClientesService'];
  clienteCreateController.$inject = ['ClientesService'];

})();