app.directive('blackRow', function() {
    return {
      restrict: 'E',
      scope: {
        inform: '='
      },
      templateUrl: 'js/directives/blackRow.html'
    };
});