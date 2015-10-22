var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
    words : [String],
    players: [{name : String,
               shuffledWords : [{selected : Boolean,
                                word: String}]}]

});

module.exports = mongoose.model('Game', GameSchema);
