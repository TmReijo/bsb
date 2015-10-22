'use strict';

var config = require('../gulp/config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var morgan = require('morgan');
var mongoose = require('mongoose');
var gameController = require('../backend/controllers/games.js');


exports.startServer = function () {

    mongoose.connect(config.db_connection_string);

    var server = express();

    var router = express.Router();
    server.use('/api', router);

    router.route('/hello')
        .get(function (req, res) {
            return res.send("hello")
        });

    router.route('/games')
        .post(gameController.postGame);


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




