(function() {
  angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    return $stateProvider.state('home', {
      url: '/',
      templateUrl: './views/main.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    }).state('partial', {
      url: '/partial',
      templateUrl: './views/partial.html'
    });
  });

}).call(this);

(function() {
  angular.module('app').controller('mainController', function() {
    return {
      tech: ['gulp', 'angular', 'bower'],
      lang: ['coffee', 'stylus', 'jade']
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiLCJjb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBZixFQUFzQixDQUFDLFdBQUQsQ0FBdEIsQ0FDRSxDQUFDLE1BREgsQ0FDVSxTQUFDLGNBQUQsRUFBaUIsa0JBQWpCO0lBQ04sa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsR0FBN0I7V0FFQSxjQUNFLENBQUMsS0FESCxDQUNTLE1BRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxHQUFMO01BQ0EsV0FBQSxFQUFhLG1CQURiO01BRUEsVUFBQSxFQUFZLGdCQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7S0FGSixDQU1FLENBQUMsS0FOSCxDQU1TLFNBTlQsRUFPSTtNQUFBLEdBQUEsRUFBSyxVQUFMO01BQ0EsV0FBQSxFQUFhLHNCQURiO0tBUEo7RUFITSxDQURWO0FBQUE7OztBQ0FBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLENBQ0UsQ0FBQyxVQURILENBQ2MsZ0JBRGQsRUFDZ0MsU0FBQTtXQUM1QjtNQUFBLElBQUEsRUFBTSxDQUNKLE1BREksRUFFSixTQUZJLEVBR0osT0FISSxDQUFOO01BTUEsSUFBQSxFQUFNLENBQ0osUUFESSxFQUVKLFFBRkksRUFHSixNQUhJLENBTk47O0VBRDRCLENBRGhDO0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FwcCcsIFsndWkucm91dGVyJ11cclxuICAuY29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnLydcclxuXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAuc3RhdGUgJ2hvbWUnLFxyXG4gICAgICAgIHVybDogJy8nXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL21haW4uaHRtbCdcclxuICAgICAgICBjb250cm9sbGVyOiAnbWFpbkNvbnRyb2xsZXInXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWFpbkN0cmwnXHJcbiAgICAgIC5zdGF0ZSAncGFydGlhbCcsXHJcbiAgICAgICAgdXJsOiAnL3BhcnRpYWwnXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3BhcnRpYWwuaHRtbCdcclxuIiwiYW5ndWxhci5tb2R1bGUgJ2FwcCdcclxuICAuY29udHJvbGxlciAnbWFpbkNvbnRyb2xsZXInLCAtPlxyXG4gICAgdGVjaDogW1xyXG4gICAgICAnZ3VscCdcclxuICAgICAgJ2FuZ3VsYXInXHJcbiAgICAgICdib3dlcidcclxuICAgIF1cclxuXHJcbiAgICBsYW5nOiBbXHJcbiAgICAgICdjb2ZmZWUnXHJcbiAgICAgICdzdHlsdXMnXHJcbiAgICAgICdqYWRlJ1xyXG4gICAgXVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
