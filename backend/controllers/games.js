var Game = require('../models/game');
var request = require('request');
var parser = require('../services/htmlParser');

exports.postGame = function(req, res) {
    var game = new Game();


    game.name = req.body.name;

    var url = req.body.url;

    request(url, function(error, response, body) {
        if (error)
            res.send('Loading of url failed.');

        var sortedWords = parser.parseWordList(body);

        sortedWords.some(function (word) {
            game.words.push(word.word);
            return (game.words.length > 30);
        });

        game.save(function(err, newGame) {
            if (err) {
                console.log(err);
                return res.send("Something very bad happened while saving the game, but it's ok. Nobody is killed!")
            }
            else
                return res.send(newGame.id);
        });

    });





}
