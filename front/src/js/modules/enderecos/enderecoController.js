(function() {
  'use strict';

  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('enderecoControllerModule', []);
    // .controller('clienteCreateOrUpdateController', clienteCreateOrUpdateController)
    // .controller('clienteListController', clienteListController)
    // .controller('clienteEditController', clienteEditController)
    // .controller('clienteShowController', clienteShowController);

  function clienteCreateOrUpdateController(clientesService, recuperarEndereco, Flash) {
    var vm = this;

    vm.title = 'Cadastrando novo Cliente';
    vm.cliente = {};

    vm.endereco = {};
    vm.enderecos = [];

    vm.createOrUpdate = function(isValid) {
      if (isValid) {
        clientesService.create(vm.cliente)
          .success(function(data) {
            vm.cliente._id = data._id;
            console.log('Cliente gravado com sucesso.');
            Flash.create('success', 'Cliente gravado com sucesso.');
          })
          .error(function(err) {
            console.log('Ocorreu um erro ao gravar o cliente.');
            Flash.create('danger', 'Ocorreu um erro ao gravar o cliente.');
          });
      } else {
        Flash.create('danger', 'Preencha todos os campos obrigatórios.');
      }
    };

    vm.adicionaEndereco = function(isValid) {
      if (isValid) {
        vm.enderecos.push(angular.copy(vm.endereco));
        vm.endereco = {};
      } else {
        vm.showAlert = true;
        vm.alertMessage = 'Preencha todos os campos obrigatórios.';
      }
    };

    vm.pesquisarCep = function(cep) {
      recuperarEndereco.find(cep)
        .success(function(data) {
          parseEndereco(data, vm.endereco);
        })
        .error(function(err) {
          Flash.create('danger', 'Cep inválido.');
          console.log(err);
        });
    };
  }

  function clienteListController(clientesService, Flash) {
    var vm = this;

    vm.title = 'Listagem de Clientes';

    // var message = '<strong>Well done!</strong> You successfully read this important alert message.';
    // Flash.create('success', message, 'custom-class');

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

  function clienteEditController(clientesService, recuperarEndereco, $stateParams) {
    var vm = this;

    vm.title = 'Editando Cliente';

    vm.cliente = {};
    vm.enderecos = [];
    vm.endereco = {};

    vm.exibirEndereco = function(id) {
      alert('exibir' + id);
    };

    vm.excluirEndereco = function(id, event) {
      // event.preventDefault();
      // event.stopPropagation();
      alert('excluir' + id);
    };

    clientesService.get($stateParams.id)
      .success(function(data) {
        vm.cliente = data.data;
        vm.enderecos = data.data.endereco;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });

    vm.pesquisarCep = function(cep) {
      recuperarEndereco.find(cep)
        .success(function(data) {
          parseEndereco(data, vm.endereco);
        })
        .error(function(err) {
          Flash.create('danger', 'Cep inválido.');
          console.log(err);
        });
    };

  }

  clienteListController.$inject = ['clientesService', 'Flash'];
  clienteEditController.$inject = ['clientesService', 'recuperarEndereco', '$stateParams'];
  clienteShowController.$inject = ['clientesService', '$stateParams'];
  clienteCreateOrUpdateController.$inject = ['clientesService', 'recuperarEndereco', 'Flash'];

  function parseEndereco(data, endereco) {
    endereco.logradouro = data.logradouro;
    endereco.bairro = data.bairro;
    endereco.cidade = data.cidade;
    endereco.estado = data.estado;
    endereco.cep = data.cep;
  }
})();