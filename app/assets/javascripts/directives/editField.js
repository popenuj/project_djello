Djello.directive('editField', ['$document', '$timeout',
  function($document, $timeout) {
    var setup = function(scope, element, attribute) {
      scope.input = element[0].querySelector('input[type="text"].form-control')

      scope.get = function(value) {
        return scope.editModel[scope.editValue];;
      }

      scope.set = function(value) {
        scope.editModel[scope.editValue] = value
      }

      scope.edit = function() {
        scope.newValue = scope.get();
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

      scope.save = function($ev) {
        $ev.stopPropagation();
        scope.set(scope.newValue);
        scope.active = false;
        scope.editModel.put()
      }
    }

    return {
      scope: {
        editValue: '@',
        editModel: '='
      },
      link: setup,
      transclude: true,
      templateUrl: 'directives/editField.html'
    }
  }
])
