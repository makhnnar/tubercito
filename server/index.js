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

const express = require('express');

const cors = require('cors');

const restApi = express();

const bodyParser = require('body-parser');

const rutas = require('./src/routes/Routes.js');

restApi.use(express.json());
//restApi.use(express.static('public'));
restApi.use(bodyParser.json());
restApi.use(bodyParser.urlencoded({ extended: true }));

restApi.use(cors());

restApi.options('*', cors());

var server = require('http').createServer(restApi);

//restApi.use('/api',rutas);

server.listen(3005,()=>console.log('Listening in port 3005'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
restApi.post('/api/test',(req,res) => {
  console.log(' ');
  console.log('Valores: '+JSON.stringify(req.body));
  console.log(' ');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //let valor = req.body;
  console.log('* body: '+JSON.stringify(req.body));  
});