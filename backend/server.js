'use strict';

var config = require('../gulp/config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var morgan = require('morgan');


exports.startServer = function () {

    var server = express();

    var router = express.Router();
    server.use('/api', router);

    router.route('/hello')
        .get(function (req, res) {
            return res.send("hello")
        });

    // Start webserver if not already running
    var s = http.createServer(server);
    console.log('started backend server');
    s.on('error', function (err) {
        if (err.code === 'EADDRINUSE') {
            gutil.log('Development server is already started at port ' + config.serverport);
        }
        else {
            throw err;
        }
    });

    s.listen(config.backendserverport);
};




