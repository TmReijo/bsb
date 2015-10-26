'use strict';

var controllersModule = require('./_index');

const API_URL = "/api";

/**
 * @ngInject
 */
function CreateGameCtrl($scope, $http) {

    $scope.name = "";
    $scope.url ="";

    $scope.invalidData = true;

    $scope.validateData = function () {
        $scope.invalidData = ($scope.name == "");
    };

    $scope.start = function () {
        $http.post(API_URL + '/games/', {name : $scope.name, url : $scope.url}).success(function (response) {
            $scope.id = response;
        });

    };
}

controllersModule.controller('CreateGameCtrl', CreateGameCtrl);
