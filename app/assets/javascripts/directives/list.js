Djello.directive('list', ['listsService', 'cardsService', function(listsService, cardsService){
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'directives/list.html',
    link: function(scope) {
      scope.deleteList = function() {
        listsService.removeList(scope.list.id);
        scope.list.remove();
      }

      scope.removeCard = function(listId, cardId) {
        cardsService.removeCard(listId, cardId);
        scope.card.remove();
      }
    }
  }
}])
