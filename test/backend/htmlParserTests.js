var assert = require('assert');
var fs = require('fs');
var _ = require('underscore');
var parser = require('../../backend/services/htmlparser');
describe('Html Parser', function () {
    it('Should parse html', function (done) {
           fs.readFile('testAssets/wiki.html', function (err, html){
            if (err)
                console.log(err)
            else {

                var parsedHtml = parser.parseHtml(html);
                var result = {};
                result.blaa ='ngh';
                debugger;

                result = parser.countWordFrequencies(parsedHtml, result);
                var fileData = JSON.stringify(result,null,2);


                try {
                    fs.writeFile('../testResults/mappedwords.json1',fileData , function (err) {
                        if (err)
                            console.log(err);
                        else
                            console.log("the file saved");
                        done();
                    })
                }
                catch (err) {
                    console.log(err);
                }




            }
        });

    });

});
