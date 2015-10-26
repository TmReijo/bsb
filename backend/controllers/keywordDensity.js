var parser = require('../services/htmlParser');
var request = require('request');

exports.postAnalysis = function(req, res) {

    var url = req.body.url;
    request(url, function(error, response, body) {
        if (error)
            throw error;
        var parsedHtml = parser.parseHtml(body);
        var mappedWords = {};
        var mappedWords = parser.mapWords(parsedHtml, mappedWords);
        res.send(mappedWords);
    });
}
