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
//const DB = require('./src/db/DBmanagerUser');
const bodyParser = require('body-parser');
const restApi = express();
//const manager = DB();
const router = express.Router();
const rutas = require('./src/routes/Routes.js');

restApi.use(router);
restApi.use(express.json());
restApi.use(bodyParser.json());
restApi.use(bodyParser.urlencoded({ extended: true }));
restApi.use(cors());
restApi.options('*', cors());

var server = require('http').createServer(restApi);

server.listen(3005,()=>console.log('Listening in port 3005'));

restApi.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.post('/api',rutas);
