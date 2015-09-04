(function() {

   'use strict';
   // Definição dos Controllers usando o Service para reqs HTTP
   angular.module('ClientesControllerModule', [])
      .controller('clienteCreateController', clienteCreateController)
      .controller('clienteListController', clienteListController)
      .controller('clienteShowController', clienteShowController);

   function clienteCreateController(ClientesService, recuperarEndereco) {
      var vm = this;

      vm.showAlert = false;
      vm.alertMessage = 'Preencha todos os campos obrigatórios.';
      vm.alertClass = 'alert-danger';

      vm.title = 'Cadastrando novo Cliente';
      vm.cliente = {};

      vm.endereco = {};
      vm.enderecos = [];

      vm.adicionaCliente = function(isValid) {
         if (isValid) {
            ClientesService.create(vm.cliente)
               .success(function(data) {
                  vm.cliente._id = data._id;
                  console.log('Cliente gravado com sucesso.');
                  showAlertSuccess(vm, 'Cliente gravado com sucesso.');
               })
               .error(function(err) {
                  console.log('Ocorreu um erro ao gravar o cliente.');
                  showAlertDanger(vm, 'Ocorreu um erro ao gravar o cliente.');
               });
         } else {
            showAlertDanger(vm, 'Preencha todos os campos obrigatórios.');
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
               showAlertDanger(vm, 'Cep inválido.');
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

function showAlertSuccess(vm, message) {
   vm.showAlert = true;
   vm.alertMessage = message;
   vm.alertClass = 'alert-success';
}

function showAlertDanger(vm, message) {
   vm.showAlert = true;
   vm.alertMessage = message;
   vm.alertClass = 'alert-danger';
}