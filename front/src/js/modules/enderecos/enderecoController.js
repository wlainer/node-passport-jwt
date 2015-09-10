(function() {
  'use strict';

  angular.module('enderecoControllerModule', [])
    .controller('enderecoController', enderecoController);

  function enderecoController(enderecoService, recuperarEnderecoService, $stateParams, Flash) {
    var vm = this;

    vm.enderecos = [];
    vm.endereco = {};

    vm.createOrUpdate = createOrUpdate;
    vm.carregarEndereco = carregarEndereco;
    vm.excluirEndereco = excluirEndereco;
    vm.exibirEndereco = exibirEndereco;
    vm.pesquisarCep = pesquisarCep;

    enderecoService.find($stateParams.clienteId)
      .success(function(data) {
        vm.enderecos = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });

    function createOrUpdate(isValid) {
      if (isValid) {
        enderecoService.create(vm.endereco)
          .success(function(data) {
            vm.enderecos.push(data.data);
            Flash.create('success', 'Preencha todos os campos obrigatórios.');
          })
          .error(function(error) {

          });
      } else {
        Flash.create('danger', 'Preencha todos os campos obrigatórios.');
      }
    }

    function exibirEndereco(id) {
      alert('exibir ' + id);
    };

    function excluirEndereco(id) {
      var clienteId = $stateParams.clienteId,
        enderecoId = id;

      enderecoService.remove(clienteId, enderecoId)
        .success(function(data) {
          findEndereco(enderecoId, function(index, endereco) {
            vm.enderecos.splice(index, 1);
            Flash.create('success', 'Endereço removido com sucesso.');
          });
        })
        .error(function(error) {
          console.log('error', error);
          Flash.create('danger', 'Ocorreu um erro ao tentar remover o endereço.');
        });
    }

    function carregarEndereco(enderecoId) {
      enderecoService.get($stateParams.clienteId, enderecoId)
        .success(function(data) {
          vm.endereco = data.data;
          console.log('Sucesso', data);
        })
        .error(function(err) {
          console.log('Erro', err);
        });
    }

    function pesquisarCep(cep) {
      recuperarEnderecoService.get(cep)
        .success(function(data) {
          vm.endereco = data;
        })
        .error(function(err) {
          Flash.create('danger', 'Cep inválido.');
          console.log(err);
        });
    }

    function findEndereco(id, callback) {
      for (var x = 0, size = vm.enderecos.length; x < size; x++) {
        if (vm.enderecos[x]._id === id) {
          callback(x, vm.enderecos[x]);
          break;
        }
      }
    }

  }

  enderecoController.$inject = ['enderecoService', 'recuperarEnderecoService', '$stateParams', 'Flash'];
})();