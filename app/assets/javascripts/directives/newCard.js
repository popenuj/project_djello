Djello.directive('newCard', ['cardsService', function(cardsService){
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'directives/newCard.html',
    link: function(scope) {
      scope.createCard = function(newCard) {
        cardsService.createCard(newCard, scope.list.id);
        scope.newCardItem = {};
      }
    }
  }
}])
