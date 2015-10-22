var Game = require('../models/game');

exports.postGame = function(req, res) {
    var game = new Game();
    game.name = req.name;
    game.save(function(err, newGame) {
        if (err)
            return res.send(err)
        else
            return res.send(newGame.id);
    });
}
