var htmlparser = require('htmlparser');
var _ = require('underscore');

var SKIP_TYPES = [
    'style',
    'script'
];

var splitWords = function (string, wordsAndCounts){

    var splittedWords = string.split(/[^a-öA-Ö]+/);

    splittedWords.forEach (function (word) {

        if(typeof wordsAndCounts[word] === 'undefined'){
            wordsAndCounts[word] = 1;
        }
        else {
            wordsAndCounts[word]++;
        }
    });
    return wordsAndCounts;
}


function mapWords(dom, wordsAndCounts){

    _.each(dom, function(elem) {

        switch(elem.type) {
            case 'text':

                wordsAndCounts = splitWords(elem.data, wordsAndCounts);

                break;
            default:

                if (!_.include(SKIP_TYPES, elem.type)) {
                    if (elem.children) {
                        wordsAndCounts = mapWords(elem.children, wordsAndCounts);

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


