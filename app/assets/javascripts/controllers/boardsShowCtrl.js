Djello.controller('BoardsShowCtrl', ['$scope', 'board', 'lists', 'cards', 'listsService', function($scope, board, lists, cards, listsService) {

  $scope.board = board;
  $scope.lists = lists;
  $scope.cards = cards;
  $scope.editingTitle = false;

  listsService.addCardsToLists(cards);


}])
