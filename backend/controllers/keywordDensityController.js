var parser = require('../services/htmlParser');
var request = require('request');

exports.postAnalysis = function(req, res) {

    console.log(req.name);
    request("http://fi.wikipedia.org/wiki/August_Langhoff", function(error, response, body) {
        if (error)
            throw error;
        var parsedHtml = parser.parseHtml(body);
        var mappedWords = {};
        var mappedWords = parser.mapWords(parsedHtml, mappedWords);
        res.send(mappedWords);
    });
}
