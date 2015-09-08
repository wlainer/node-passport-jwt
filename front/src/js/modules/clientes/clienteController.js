(function() {
  'use strict';

  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('clientesControllerModule', [])
    .controller('clienteCreateOrUpdateController', clienteCreateOrUpdateController)
    .controller('clienteListController', clienteListController)
    .controller('clienteShowController', clienteShowController);

  function clienteCreateOrUpdateController(clientesService, recuperarEndereco, Flash, $stateParams) {
    var vm = this,
        id = $stateParams.id;

    vm.createOrUpdate = createOrUpdate;
    vm.title = !!id ? 'Editando Cliente' : 'Cadastrando novo Cliente';
    vm.cliente = {};

    if (!!id) {
      clientesService.get($stateParams.id)
        .success(function(data) {
          vm.cliente = data.data;
          vm.enderecos = data.data.endereco;
          console.log('Sucesso', data);
        })
        .error(function(err) {
          console.log('Erro', err);
        });
    }

    function success(data) {
      vm.cliente._id = data._id;
      console.log('Cliente gravado com sucesso.');
      Flash.create('success', 'Cliente gravado com sucesso.');
    }

    function error(err) {
      console.log('Ocorreu um erro ao gravar o cliente.');
      Flash.create('danger', 'Ocorreu um erro ao gravar o cliente.');
    }

    function createOrUpdate(isValid) {
      if (isValid) {
        clientesService.create(vm.cliente)
          .success(success)
          .error(error);
      } else {
        Flash.create('danger', 'Preencha todos os campos obrigatórios.');
      }
    }
  }

  function clienteListController(clientesService, Flash) {
    var vm = this;

    vm.title = 'Listagem de Clientes';

    clientesService.find()
      .success(function(data) {
        vm.list = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  function clienteShowController(clientesService, $stateParams) {
    var vm = this;

    vm.title = 'Exibindo Dados do Cliente';

    clientesService.get($stateParams.id)
      .success(function(data) {
        vm.item = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  clienteCreateOrUpdateController.$inject = ['clientesService', 'recuperarEndereco', 'Flash', '$stateParams'];
  clienteShowController.$inject = ['clientesService', '$stateParams'];
  clienteListController.$inject = ['clientesService', 'Flash'];
})();