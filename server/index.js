var express = require('express');
var app = express();
var router = express.Router();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection',function(socket){
	
};

http.listen(3000, function(){
    console.log('listening on *:3000');
});


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