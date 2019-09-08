const io = require('./../../index.js');

//const dataInstance = new Database();

var Ioconnection = function(){

    this.pruebasocket = function () {
      console.log('si entro aca solo mostrara esto');
      sockets.broadcast.emit('mensaje', data);
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
