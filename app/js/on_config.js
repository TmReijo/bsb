'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Game', {
    url: '/',
    controller: 'GameCtrl as game',
    templateUrl: 'game.html',
    title: 'Play your game'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
