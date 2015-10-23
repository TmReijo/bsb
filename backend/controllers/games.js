var Game = require('../models/game');

exports.postGame = function(req, res) {
    var game = new Game();
    game.name = req.name;
    game.save(function(err, newGame) {
        if (err) {
            console.log(err);
            return res.send("Something very bad happened, but it's ok. Nobody is killed!")
        }
        else
            return res.send(newGame.id);
    });
}
