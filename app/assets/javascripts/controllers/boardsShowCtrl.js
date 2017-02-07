Djello.controller('BoardsShowCtrl', ['$scope', 'board', 'lists', 'cards', 'listsService', 'boardsService', function($scope, board, lists, cards, listsService, boardsService) {

  $scope.board = board;
  $scope.lists = lists;
  $scope.cards = cards;

  listsService.addCardsToLists(cards);

  $scope.deleteBoard = function() {
    $scope.board.remove();
  }

}])
