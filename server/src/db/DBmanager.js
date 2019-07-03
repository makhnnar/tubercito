
var Database = function(){

  const { Client } = require('pg')

  this.connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'root',
    port: 5432,
  }

  this.client = null;

  this.init = function(){
    console.log("Conecting to ---> "+this.DATABASE_URL);
    this.cliente = new Client(this.connectionData);
    this.cliente.connect();
  };

  this.query = function(sql,params,cbError,cbSuccess){
    let consulta = {
      text: sql,
      values: params,
      rowMode: 'object',
    };
    this.cliente.query(
      consulta,
      (err,res) =>{
        if(err){
          console.log(err);
          cbError();
        }else{
          cbSuccess(res.rows);
        }
      }
    );
  }
};
  
module.exports = function(){
  var instancia = new Database();
  instancia.init();
  return instancia;
};
  