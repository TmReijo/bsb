'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('Game', {
            url: '/blaa',
            controller: 'GameCtrl as game',
            templateUrl: 'game.html',
            title: 'Play your game'
        })
        .state('CreateGame', {
            url: '/',
            controller: 'CreateGameCtrl as creator',
            templateUrl: 'createGame.html',
            title: 'Create Your Game!'
        });

    $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
