(function() {
  'use strict';

  angular.module('myApp.goClick', [])
    .directive('goClick', goClick);

  function goClick($location) {
    var directive = {
      link: link,
    };
    return directive;

    function link(scope, element, attrs) {
      var path;

      attrs.$observe('goClick', function(val) {
        path = val;
      });

      element.bind('click', function() {
        scope.$apply(function() {
          $location.path(path);
        });
      });
    }
  }

  goClick.$inject = ['$location'];
})();