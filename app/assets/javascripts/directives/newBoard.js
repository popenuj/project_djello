Djello.directive('newBoard', ['$document', '$timeout', 'boardsService',
  function($document, $timeout, boardsService) {
    var setup = function(scope, element) {

      scope.input = element[0].querySelector('input[type="text"].form-control.new-board')

      scope.edit = function() {
        scope.active = true;
        scope.clicked = true;
        $timeout(function() {
          scope.input.focus()
        });
      };

      $document.on('click', function(event) {
        if (!scope.clicked) {
          scope.active = false;
        }
        scope.clicked = false;
        scope.$apply()
      })

      scope.save = function($event) {
        $event.stopPropagation();
        boardsService.createNewBoard(scope.newBoardItem);
        scope.newBoardItem = {};
        scope.active = false;
      }
    }

    return {
      scope: true,
      transclude: true,
      link: setup,
      templateUrl: 'directives/newBoard.html'
    }
  }
])
