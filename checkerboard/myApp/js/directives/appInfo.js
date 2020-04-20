app.directive('appInfoFire', function() {
    return {
      restrict: 'E',
      scope: {
        inform: '='
      },
      templateUrl: 'js/directives/appInfo.html'
    };
});