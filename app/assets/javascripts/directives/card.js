Djello.directive('card', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'directives/card.html',
    link: function(scope) {
      scope.markComplete = function() {
        scope.card.completed = new Date();
        scope.card.put()
      };

      scope.markIncomplete = function() {
        scope.card.completed = null;
        scope.card.put()
      };
    }
  }
})
