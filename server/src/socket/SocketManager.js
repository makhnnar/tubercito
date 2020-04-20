//const express = require('express');
//const restApi = express();
//const socketserver = require('http').createServer(restApi);
//const io = require('socket.io')(socketserver);
//const io = require('socket.io');
//const io = require('./../../index.js');

//const ioInstance = new io();

var IOSocketManager = function(){

	this.send = function(socket,msg){
		socket.emit('mensaje', msg);
	};

};

module.exports = function(){
	var instancia = new IOSocketManager();
	return instancia;
};
