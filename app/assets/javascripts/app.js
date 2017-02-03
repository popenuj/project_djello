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
      controller: 'boardsIndexCtrl',
      templateUrl: '/templates/boards/index.html'
    })
    .state('show', {
      url: '/boards/:id'
    })
})