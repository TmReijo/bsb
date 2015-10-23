'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CreateGameCtrl($scope) {

    $scope.name = "";

    $scope.invalidData = true;

    $scope.validateData = function () {
        $scope.invalidData = ($scope.name == "");
    };

    $scope.hello = "laa";

    $scope.start = function () {

    };
}

controllersModule.controller('CreateGameCtrl', CreateGameCtrl);
