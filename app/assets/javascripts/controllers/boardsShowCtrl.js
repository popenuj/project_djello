Djello.controller('boardsShowCtrl', ['$scope', 'boardsService', '$stateParams', function($scope, boardsService, $stateParams) {

  boardsService.getBoard($stateParams.id);

}])
