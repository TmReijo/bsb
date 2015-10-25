var assert = require('assert');
var fs = require('fs');
var parser = require('../../backend/services/htmlparser');
describe('Html Parser', function () {
    it('Should parse html', function () {
        console.log('blaa');
        fs.readFile('testAssets/wiki.html', function (err, html){
            console.log('here');
            if (err)
                console.log(err)
            else {
                console.log(html);
                var parsedHtml = parser.parseHtml(html);
                console.log(JSON.stringify(parsedHtml, null, 2));
            }
        });

    });

});