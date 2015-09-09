(function() {
  'use static';

  angular.module('formControllerModule', [])
    .controller('formController', formController);

  function formController($stateParams) {
    var vm = this;


  }

  formController.$inject = ['$stateParams'];


})();