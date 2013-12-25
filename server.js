/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose'),
    growth_rate = require('growth-rate');

//Bootstrap db connection
var db = mongoose.connect(config.db);

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

//bootstrap passport config
require('./config/passport')(passport);

var app = express();

//express settings
require('./config/express')(app, passport, db);

//Bootstrap routes
require('./config/routes')(app, passport, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);
console.log(growth_rate.get_rate(
        [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35, 35.5, 36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45, 45.5, 46, 46.5, 47, 47.5, 48, 48.5, 49, 49.5, 50, 50.5, 51, 51.5, 52, 52.5, 53, 53.5, 54, 54.5, 55, 55.5, 56, 56.5, 57, 57.5, 58, 58.5, 59, 59.5, 60, 60.5, 61, 61.5, 62, 62.5, 63, 63.5, 64, 64.5, 65, 65.5, 66, 66.5],
        [0.092, 0.094, 0.096, 0.1, 0.105, 0.113, 0.123, 0.136, 0.154, 0.172, 0.195, 0.226, 0.256, 0.295, 0.345, 0.398, 0.464, 0.537, 0.617, 0.707, 0.793, 0.83, 0.843, 0.853, 0.862, 0.865, 0.871, 0.873, 0.876, 0.883, 0.891, 0.899, 0.913, 0.933, 0.951, 0.967, 0.982, 0.999, 1.016, 1.033, 1.05, 1.064, 1.08, 1.095, 1.11, 1.124, 1.139, 1.153, 1.169, 1.186, 1.2, 1.213, 1.224, 1.235, 1.247, 1.257, 1.271, 1.279, 1.297, 1.317, 1.333, 1.352, 1.373, 1.393, 1.414, 1.437, 1.457, 1.46, 1.46, 1.459, 1.456, 1.46, 1.46, 1.456, 1.456, 1.455, 1.456, 1.452, 1.454, 1.452, 1.453, 1.45, 1.45, 1.448, 1.448, 1.444, 1.445, 1.445, 1.443, 1.442, 1.443, 1.442, 1.44, 1.441, 1.44, 1.437, 1.438, 1.435, 1.436, 1.435, 1.436, 1.433, 1.433, 1.432, 1.428, 1.425, 1.421, 1.415, 1.413, 1.411, 1.409, 1.406, 1.402, 1.399, 1.394, 1.393, 1.391, 1.384, 1.38, 1.377, 1.373, 1.367, 1.364, 1.357, 1.353, 1.35, 1.342, 1.337, 1.333, 1.323, 1.321, 1.311, 1.307]));
//Initializing logger
logger.init(app, passport, mongoose);

//expose app
exports = module.exports = app;
