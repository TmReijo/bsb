var htmlparser = require('htmlparser');
var _ = require('underscore');

var SKIP_TYPES = [
    'style',
    'script'
];

var splitWords = function (string, wordsAndCounts, type){

    var splittedWords = string.split(/[^a-öA-Ö]+/);

    splittedWords.forEach (function (word) {

        var counterObject;
        if(typeof wordsAndCounts[word] === 'undefined'){
            counterObject = {};
        }
        else {
            counterObject = wordsAndCounts[word];
        }

        if (typeof counterObject[type] === 'undefined')
            counterObject[type] = 1;
        else
            counterObject[type]++;

        wordsAndCounts[word] = counterObject;


    });
    return wordsAndCounts;
}


function mapWords(dom, wordsAndCounts, name){

    _.each(dom, function(elem) {

        switch(elem.type) {
            case 'text':

                wordsAndCounts = splitWords(elem.data, wordsAndCounts, name);

                break;
            default:

                if (!_.include(SKIP_TYPES, elem.type)) {
                    if (elem.children) {
                        wordsAndCounts = mapWords(elem.children, wordsAndCounts, elem.name);

                    }
                }
        }
    });

    return wordsAndCounts;
}

exports.mapWords = mapWords;



exports.parseHtml = function(html) {
    var handler = new htmlparser.DefaultHandler(function (error, dom) {

    }, {
        verbose: true,
        ignoreWhitespace: true
    });
    new htmlparser.Parser(handler).parseComplete(html);
    return handler.dom;
};


