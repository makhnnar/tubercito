const express = require('express');
const cors = require('cors');
const restApi = express();
const server = require('http').createServer(restApi);
const socketserver = require('http').createServer(restApi);
const io = require('socket.io')(socketserver);
const rutas = require('./src/routes/Routes.js');

restApi.use(express.json());
restApi.use(express.static('public'));
restApi.use(cors());
restApi.options('*', cors());

server.listen(3005,()=>console.log('Listening server in port 3005'));
socketserver.listen(3010,()=>console.log('Listening socket.io in port 3010'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

restApi.use('/api',rutas);

io.on('connection', (socket) => {
  console.log('nueva conexion', socket.id);
  socket.on('mensaje', (data) =>{
    io.sockets.emit('mensaje', data);
  });
});

module.exports = io;

/**
*	Para este proyecto, usaremos la posibilidad que nos ofrece 
* 	express de crear una mejor estructuracion del proyecto usando rutas.
*	Por ello de forma completamente intencional ya agrupe el minimo de
*	carpetas y archivos que estaras manejando, van a ser muchos mas, pero
*	por lo menos con esto ya tienen una base para mantener la arquitectura
*	lo que menciono lo pueden buscar en la web como
*	
*	var express = require('express');
*	var router = express.Router();
*
*	para mas informacion visiten la documentacion oficial. Esto es obligatorio
*/