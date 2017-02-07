Djello.factory('membersService', ['Restangular', function(Restangular) {

  var getMembersFromBoard = function(boardId) {
    return Restangular.one('boards', boardId).all('users').getList().$object
  }

  return {
    getMembersFromBoard: getMembersFromBoard
  }

}])
