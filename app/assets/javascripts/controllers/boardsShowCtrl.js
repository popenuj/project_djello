Djello.controller('BoardsShowCtrl', ['$scope', 'board', 'lists', 'cards', function($scope, board, lists, cards) {

  $scope.board = board;
  $scope.lists = lists;
  $scope.cards = cards;

}])
