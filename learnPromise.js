var express   = require("express");
var mysql     = require('mysql');
var express   = require('express')
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

let promiseToGo = new Promise(function(resolve, reject){
    var toGo = true;

    if(toGo){
        resolve('good');
    }
    else{
        reject('nope');
    }
});

promiseToGo.then(function(result){
    console.log("Let's go " + result);
})