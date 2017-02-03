Djello.factory('boardsService', ['Restangular', function(Restangular) {

  var board;

  var getBoard = function(id) {
    Restangular.one('boards', id).get()
      .then(function(response) {
        console.log(response)
        // board = response.data
      })
  }

  return {
    getBoard: getBoard
  }

}])
