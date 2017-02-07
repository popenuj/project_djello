Djello.factory('listsService', ['Restangular', 'cardsService', function(Restangular, cardsService) {
  var _lists = [];

  var getListsFromBoard = function(boardId) {
    return Restangular.one('boards', boardId).all('lists').getList().then(function(response) {
      angular.copy(response, _lists);
      return _lists;
    });
  }

  var addCardsToLists = function(cards) {
    console.log("adding cards to lists")
    for (var i = 0; i < _lists.length; i++) {
      _lists[i].cards = cards[_lists[i].id]
    }
    return _lists
  }

  var updateList = function(list) {
      list.put();
      getListsFromBoard(list.board_id);
  }

  var createList = function(listParams, boardId) {
    Restangular.one('boards', boardId).all('lists').post({list: listParams}).then(function(response) {
        _lists.push(response)
    });
  }

  return {
    getListsFromBoard: getListsFromBoard,
    addCardsToLists: addCardsToLists,
    createList: createList,
    updateList: updateList
  }
}])
