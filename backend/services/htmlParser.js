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


function countWordFrequencies(dom, wordsAndCounts, name){

    _.each(dom, function(elem) {

        switch(elem.type) {
            case 'text':
                wordsAndCounts = splitWords(elem.data, wordsAndCounts, name);
                break;
            default:
                if (!_.include(SKIP_TYPES, elem.type)) {
                    if (elem.children) {
                        wordsAndCounts = countWordFrequencies(elem.children, wordsAndCounts, elem.name);
                    }
                }
        }
    });

    return wordsAndCounts;
}

exports.countWordFrequencies = countWordFrequencies;


var weights = {
    title : 10,
    label: 5,
    h5 : 2,
    h4 : 3,
    h3 : 4,
    h2 : 5,
    h1 : 6,
    a  : 6,
    p  : 2
}

function calcWeight(wordObject) {
    var weight = 0;
    for (var type in wordObject)
    {
        if (typeof weights[type] === 'undefined')
            weight += wordObject[type];
        else
            weight += weights[type] * wordObject[type];
    }
    return weight;
}

function sortWords(wordFrequencies) {
    var array = [];
    for (var word in wordFrequencies) {
        weightObject = {word : word,
                        weight : calcWeight(wordFrequencies[word])};
        array.push(weightObject);
    }
    array.sort(function (a, b) {
        return b.weight - a.weight;
    });
    return array;
}

exports.sortWords = sortWords;

exports.parseHtml = function(html) {
    var handler = new htmlparser.DefaultHandler(function (error, dom) {

    }, {
        verbose: true,
        ignoreWhitespace: true
    });
    new htmlparser.Parser(handler).parseComplete(html);
    return handler.dom;
};


