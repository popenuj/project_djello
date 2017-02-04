var Djello = angular.module('Djello', ['restangular', 'ui.router', 'Devise']);

Djello.config(['RestangularProvider',
  function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
  }]
)

Djello.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/boards');

  $stateProvider
    .state('index', {
      url: '/boards',
      controller: 'BoardsIndexCtrl',
      templateUrl: '/templates/boards/index.html',
      resolve: {
        boards: function(boardsService) {
          return boardsService.getBoards();
        }
      }
    })
    .state('show', {
      url: '/boards/:id',
      controller: 'BoardsShowCtrl',
      templateUrl: '/templates/boards/show.html',
      resolve: {
        board: function(boardsService, $stateParams) {
          return boardsService.getBoard($stateParams.id);
        },
        lists: function(listsService, $stateParams) {
          return listsService.getListsFromBoard($stateParams.id);
        },
        cards: function(lists, cardsService) {
          return cardsService.getCardsFromLists(lists);
        }
      }
    })
})
