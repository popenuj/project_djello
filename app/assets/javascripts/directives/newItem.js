Djello.directive('newItem', ['$document', '$timeout', 'listsService', 'boardsService',
  function($document, $timeout, listsService, boardsService) {
    var setup = function(scope, element) {

      console.log(scope.modelthing)

      scope.input = element[0].querySelector('input[type="text"].form-control')

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
        if (scope.modelthing === "board") {
          boardsService.createNewBoard(scope.newValue);
        }
        scope.active = false;
      }
    }

    return {
      scope: {
        modelthing: '='
      },
      link: setup,
      transclude: true,
      templateUrl: 'directives/newItem.html'
    }
  }
])
