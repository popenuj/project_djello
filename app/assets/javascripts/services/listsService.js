Djello.factory('listsService', ['Restangular', function(Restangular) {
  var _lists;

  var getListsFromBoard = function(boardId) {
    return Restangular.one('boards', boardId).all('lists').getList().then(function(response) {
      _lists = response;
      return _lists;
    });
  }

  return {
    getListsFromBoard: getListsFromBoard
  }
}])