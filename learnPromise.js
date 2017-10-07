var express   = require("express");
var mysql     = require('mysql');
var app 	  = express();
var async 	  = require('async');
var moment = require('moment');

var pool = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : 'secret',
	database : 'elugy',
});

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

let promiseToGo = function(resolve, reject){
    var toGo = true;

    if(toGo){
        console.log('tes');
        return Promise.resolve('good');
    }
    else{
        return Promise.reject('nope');
    }
};

let promiseData = new Promise(function (resolve, reject) {

    var toGo = true;

    if(toGo){
        pool.getConnection(function(err,connection){
            connection.query("SELECT * FROM novels", function(err,rows){
                connection.release();
                if(err) console.log(err);
                else {
                    return resolve(rows);
                }
            });
        })
    }
    else{
        reject('bye');
    }
});

promiseData.then(function (result) {
    console.log(result);
})
.then(promiseToGo)
.then(function(result){
    console.log((moment().format()).toString());
    console.log("Let's go " + result);
})
