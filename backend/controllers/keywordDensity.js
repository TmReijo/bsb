var parser = require('../services/htmlParser');
var request = require('request');

exports.postAnalysis = function(req, res) {

    var url = req.body.url;
    request(url, function(error, response, body) {
        if (error)
            throw error;
        var sortedWords = parser.parseWordList(body);

        res.send(sortedWords);
    });
}
