var htmlparser = require('htmlparser');


exports.parseHtml = function(html) {
    var handler = new htmlparser.DefaultHandler(function (error, dom) {

    }, {
        verbose: true,
        ignoreWhitespace: true
    });
    new htmlparser.Parser(handler).parseComplete(html);
    return handler.dom;
}
