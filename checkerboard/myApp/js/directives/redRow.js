app.directive('redRow', function() {
    return {
      restrict: 'E',
      scope: {
        inform: '='
      },
      templateUrl: 'js/directives/redRow.html'
    };
});