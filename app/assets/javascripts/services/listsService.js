Djello.factory('listsService', ['Restangular', function(Restangular) {
  var _lists;

  var getListsFromBoard = function(boardId) {
    return Restangular.one('boards', boardId).all('lists').getList().then(function(response) {
      _lists = response;
      return _lists;
    });
  }

  var addCardsToLists = function(cards) {
    for (var i = 0; i < _lists.length; i++) {
      _lists[i].cards = cards[_lists[i].id]
    }
    return _lists
  }

  var updateList = function(list) {
      list.put();
      getListsFromBoard(list.board_id);
  }

  return {
    getListsFromBoard: getListsFromBoard,
    addCardsToLists: addCardsToLists,
    updateList: updateList
  }
}])
