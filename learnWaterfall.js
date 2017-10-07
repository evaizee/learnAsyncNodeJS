var express   = require("express");
var mysql     = require('mysql');
var app 	  = express();
var async 	  = require('async');
/*
var connection = mysql.createConnection({
	host     : '10.10.10.54',
	user     : 'root',
	password : 'secret',
	database : 'elugy',
});
*/

function sum(a, b){
	var total = a + b;
	return total;
}

function times(a, b){
	var total = a * b;
	return total;
}

function divide(a, b) {
	var total = a/b;
	return total;
}

app.get('/waterfall', function (req, res) {

	async.waterfall(
    [
        function(callback) {
        	var num1 = 3;
        	var num2 = 4;
            callback(null, num1, sum(num1, num2));
        },
        function(arg1, arg2, callback) {
            console.log(arg1+' '+arg2);
            callback(null, times(arg1, arg2), arg2);
        },
        function(arg1, arg2, callback) {
            console.log(arg1+' '+arg2);
            callback(null, divide(arg1, arg2));
        },
        function(argument, callback) {
        	console.log('tes '+argument);
        	callback(null, argument);
        },
    ],
    function (err, caption) {
        console.log(caption);
        res.send(200, caption);
        //res.send(caption);
        // Node.js and JavaScript Rock!
    });
});

app.listen(3000);