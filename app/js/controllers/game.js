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
    for (var row = 0; row < itemsInColumn; row++) {

        for (var column = 0; column < itemsInColumn; column++) {
            var text = "Sana " + row + column;

            var gameWord = {
                word: text,
                selected: false
            };
            vm.words.push(gameWord);
        }

    }

    vm.checkDoWeHaveAWinner = function () {

        //check rows
        for (var row = 0; row < itemsInColumn; row++) {
            var fullRowSelected = true;
            for (column = 0; column < itemsInColumn; column++) {
                if (!vm.words[row * itemsInColumn + column].selected)
                    fullRowSelected = false;
            }
            if (fullRowSelected)
                return true;
        }

        //check columns
        for (var column = 0; column < itemsInColumn; column++) {
            var fullColumnSelected = true;
            for (row = 0; row < itemsInColumn; row++) {
                if (!vm.words[row * itemsInColumn + column].selected)
                    fullColumnSelected = false;
            }
            if (fullColumnSelected)
                return true;
        }
        return false;

    }


    vm.wordClicked = function (word) {
        word.selected = !word.selected;
        vm.weHaveAWinner = vm.checkDoWeHaveAWinner();
    }

}

controllersModule.controller('GameCtrl', GameCtrl);
