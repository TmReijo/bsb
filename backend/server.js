'use strict';

var config = require('../gulp/config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var morgan = require('morgan');
var mongoose = require('mongoose');
var gameController = require('../backend/controllers/games.js');
var keywordDensityController = require('../backend/controllers/keywordDensity.js');
var bodyParser = require('body-parser');


exports.setBackendStuff = function (server) {

    mongoose.connect(config.db_connection_string);

    var router = express.Router();

    server.use(bodyParser.json());
    server.use('/api', router);

    router.route('/hello')
        .get(function (req, res) {
            return res.send("hello")
        });

    router.route('/games')
        .post(gameController.postGame);

    router.route('/analyze')
        .post(keywordDensityController.postAnalysis);


};




