(function() {

  'use strict';
  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('ClientesControllerModule', [])
    .controller('clienteCreateController', clienteCreateController)
    .controller('clienteListController', clienteListController)
    .controller('clienteShowController', clienteShowController);

  function clienteCreateController(ClientesService, recuperarEndereco) {
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

    vm.pesquisarCep = function(cep) {
      recuperarEndereco.find(cep)
        .success(function(data) {
          parseEndereco(data, vm.endereco);
        })
        .error(function(err) {
          console.log(err);
        });
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
  clienteCreateController.$inject = ['ClientesService', 'recuperarEndereco'];

})();

function parseEndereco(data, endereco) {
    endereco.logradouro = data.logradouro;
    endereco.bairro = data.bairro;
    endereco.cidade = data.cidade;
    endereco.estado = data.estado;
    endereco.cep = data.cep;
}