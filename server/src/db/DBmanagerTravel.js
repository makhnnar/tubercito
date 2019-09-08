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

  this.getinformationtravel = function(id_travel, cb){
    console.log('Obteniendo informacion del viaje');
    var sql = 'SELECT id_origin_address FROM travel WERE id_travel = $1';
    dataInstance.query(
      sql,
      [
        id_travel,
        cb
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

  this.deleteaddress = function(id_address, cb){
    console.log('Eliminando Direccion');
    var sql = 'DELETE * FROM address WHERE id_address = $1';
    dataInstance.query(
      sql,
      [
        id_address
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

  this.deletetravel = function(id_travel, cb){
    console.log('Eliminando Viaje');
    var sql = 'DELETE * FROM travel WHERE id_travel = $1';
    dataInstance.query(
      sql,
      [
        id_travel
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
  
  this.acceptborrower = function(id_travel, id_user, cb){
    console.log('Asignar un conductor');
    var sql = 'UPDATE travel SET id_borrower_user = $2 WHERE id_travel =$1';
    dataInstance.query(
      sql,
      [
        id_travel,
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

  this.canceledborrower = function(id_travel, cb){
    console.log('Eliminando conductor del viaje');
    var sql = 'DELETE id_borrower_user FROM travel WERE id_travel = $1';
    dataInstance.query(
      sql,
      [
        id_travel
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

}

module.exports = function(){
  var instancia = new Dbtravel();
  instancia.init();
  return instancia;
};
