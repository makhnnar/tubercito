const Database = require('./DBmanager');

const dataInstance = new Database();

var Dbwallet = function(){

  this.updatewallet = function(id_wallet, cuantity, cb){
    console.log('Actualiza la cartera del chofer');
    var sql = 'UPDATE wallet SET cuantity = $2 WHERE id_wallet =$1';
    dataInstance.query(
      sql,
      [
        id_wallet,
        cuantity
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

  this.buscaridwallet = function(id_user, cb){
    console.log('buscar el id de la cartera correcta');
    var sql = 'SELECT id_wallet FROM users WHERE id_user = $1';
    dataInstance.query(
      sql,
      [
        id_user
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

  /*this.buscaridwallet = function(id_user, cb){
    console.log('buscar el id de la cartera correcta');
    var sql = 'SELECT id_wallet FROM users WHERE id_user = $1';
    dataInstance.query(
      sql,
      [
        id_user
      ],
      () =>{
        cb(true,null);
      },
      (res) =>{
        console.log(JSON.stringify(res));
        cb(null,res);
      }
    );
  };*/

}

module.exports = function(){
  var instancia = new Dbwallet();
  return instancia;
};
