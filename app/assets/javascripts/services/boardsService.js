Djello.factory('boardsService', ['Restangular', function(Restangular) {

  var _board, _boards = [];


  // Show
  var getBoard = function(id) {
    return Restangular.one('boards', id).get().then(function(response) {
      _board = response;
      return _board;
    });
  }


  // Index
  var getBoards = function() {
    return Restangular.all('boards').getList()
      .then(function(response) {
        angular.copy(response, _boards);
        return _boards;
      });
  }

  // Create
  var createNewBoard = function(params) {
    return Restangular.all('boards').post({board: params}).then(function(response) {
        getBoards();
        return response;
    });
  }

  // Update
  var updateBoard = function(board) {
    board.put();
    getBoard(board.id);
  }

  return {
    getBoard: getBoard,
    createNewBoard: createNewBoard,
    getBoards: getBoards,
    updateBoard: updateBoard
  }

}])
