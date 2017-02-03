Djello.factory('boardsService', ['Restangular', function(Restangular) {

  var _board;

  var getBoard = function(id) {
    return Restangular.one('boards', id).get().then(function(response) {
      _board = response;
      console.log('board', _board)
      return _board;
    });
  }

  return {
    getBoard: getBoard
  }

}])
