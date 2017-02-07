Djello.directive('newList', ['$document', '$timeout', 'listsService',
  function($document, $timeout, listsService) {
    var setup = function(scope, element) {

      scope.input = element[0].querySelector('input[type="text"].form-control.new-list')

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
        listsService.createList(scope.newListItem, scope.board.id);
        scope.newListItem = {};
        scope.active = false;
      }
    }

    return {
      scope: true,
      transclude: true,
      link: setup,
      templateUrl: 'directives/newList.html'
    }
  }
])
