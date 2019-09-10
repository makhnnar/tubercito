//const express = require('express');
//const restApi = express();
//const socketserver = require('http').createServer(restApi);
//const io = require('socket.io')(socketserver);
const io = require('socket.io');
const ios = require('./../../index.js');

//const ioInstance = new io();

var Ioconnection = function(){

  this.pruebasocket = function () {
    //console.log('si entro aca solo mostrara esto');
    //io.on('connection', (socket) => {
    //  sockets.broadcast.emit('mensaje');
    //});
    io.on('connection', (socket) => {
      console.log('nueva conexion', socket.id);
      socket.on('mensaje', (data) =>{
        io.sockets.emit('mensaje', data);
      });
    });
  }
  /*

  this. = function(cb){
    console.log('');
    var sql = '';
    dataInstance.query(
      sql,
      [
        
      ],
      () =>{
        cb(true,null);
      },
      (res) =>{
        console.log(JSON.stringify(res));
        cb(null,res);
      }
    );
  };

*/

}

module.exports = function(){
  var instancia = new Ioconnection();
  return instancia;
};
