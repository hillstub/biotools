/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	growth_rate = require('growth-rate');


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};


exports.get_rate = function(req, res){
	res.json(growth_rate.get_rate(req.body.values.xvals, req.body.values.yvals));
}