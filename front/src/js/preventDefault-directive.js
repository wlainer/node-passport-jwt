(function() {
  'use strict';

  angular.module('myApp.preventDefault', [])
    .directive('preventDefault', preventDefault);


  function preventDefault() {
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }
})();