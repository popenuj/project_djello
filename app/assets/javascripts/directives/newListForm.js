Djello.directive('newListForm', ['listsService', function(listsService) {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'directives/newListForm.html',
    link: function(scope) {
      scope.createNewList = listsService.createNewList
    }
  }
}])
