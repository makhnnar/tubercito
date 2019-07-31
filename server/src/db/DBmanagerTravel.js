const Database = require('./DBmanager');

const dataInstance = new Database();

var Dbtravel = function(){

  this.createdorigintravel = function(id_requesting_user, id_origin_address, cb){
    console.log('');
    var sql = 'INSER INTO travel(id_requesting_user, id_origin_address) VALUES($1, $2) RETURNING id_travel';
    dataInstance.query(
      sql,
      [
        id_requesting_user,
        id_origin_address
      ],
      () => {
        cb(true,null);
      },
      (res) => {
        console.log(JSON.stringify(res));
        cb(null,res);
      }
    );
  };

  this.createddestinationtravel = function(id_destination_address, id_travel cb) {
    console.log('');
    var sql = 'UPDATE travel SET id_destination_address = $1 WHERE id_travel =$2';
    dataInstance.query(
      sql,
      [
        id_destination_address,
        id_travel
      ],
      () => {
        cb(true,null);
      },
      (res) => {
        console.log(JSON.stringify(res));
        cb(null,res);
      }
    );
  };

  

}

module.exports = function(){
  var instancia = new Dbtravel();
  instancia.init();
  return instancia;
};
