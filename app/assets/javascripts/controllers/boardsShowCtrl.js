Djello.controller('BoardsShowCtrl', ['$scope', 'board', 'lists', function($scope, board, lists) {

  // boardsService.getBoard($stateParams.id);
  $scope.board = board;
  $scope.lists = lists;

  console.log($scope.board)
  console.log($scope.lists)

}])
