(function() {
  'use strict';

  // Definição dos Controllers usando o Service para reqs HTTP
  angular.module('myApp.Organizacao.ControllerModule', [])
    .controller('organizacaoCreateOrUpdateController', organizacaoCreateOrUpdateController)
    .controller('organizacaoListController', organizacaoListController);

  function organizacaoCreateOrUpdateController() {
    var vm = this;

    vm.title = 'Cadastrando Organização';
  }

  function organizacaoListController(organizacaoService) {
    var vm = this;

    vm.title = 'Listagem de Organizações';

    organizacaoService.find()
      .success(function(data) {
        vm.list = data.data;
        console.log('Sucesso', data);
      })
      .error(function(err) {
        console.log('Erro', err);
      });
  }

  organizacaoListController.$inject = ['organizacaoService'];
})();