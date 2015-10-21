'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function GameCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'Bullshit Bingo Time!';
    vm.number = 1234;

    var itemsInColumn = 5;
    vm.words = [];
    for (var i = 0; i < itemsInColumn; i++) {
        var row = [];
        for (var j = 0; j < itemsInColumn; j++) {
            row.push("Sana " + i + j);
        }
        vm.words.push(row);
    }


}

controllersModule.controller('GameCtrl', GameCtrl);
