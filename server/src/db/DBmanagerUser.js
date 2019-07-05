const Database = require('./DBmanager');

var Dbuser = function(){

  this.typeuser = function(description, cb) {
    console.log('Crear tipo de usuario');
    var sql = 'INSERT INTO userType(description) VALUES($1) RETURNING id_user_type';
    Database.query(
      sql,
      [
        description
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

  this.createperson = function(firts_name,last_name,email,gender,birthday,id_user_type, cb) {
    console.log('crear persona');
    var sql = 'INSERT INTO person(firts_name, last_name, email, gender, birthday, id_user_type) VALUES($1, $2, $3, $4, $5, $6) RETURNING id_persona, id_user_type';
    Database.query(
      sql,
      [
        firts_name,
        last_name,
        email,
        gender,
        birthday,
        id_user_type
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

  this.createuser = function(username, password, id_person, id_user_type, cb) {
    console.log('Crear tipo de usuario');
    var sql = 'INSERT INTO user(username, password, id_person, id_user_type,) VALUES($1, $2) RETURNING id_user';
    Database.query(
      sql,
      [
        username,
        password,
        id_person,
        id_user_type
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
  
  this.login = function(username, password, cb) {
    console.log('Revisara si existe el usuario');
    var sql = 'SELECT * FROM user WHERE username = $1, password = $2 RETURNING id_person';
    Database.query(
      sql,
      [
        username,
        password
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
  this.loginperson = function(id_person, cb) {
    console.log('Buscar datos de persona');
    var sql = 'SELECT * FROM person WHERE id_person = $1 RETURNING *';
    Database.query(
      sql,
      [
        id_person
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

  this.logout = function(token_temporal, cb) {
    console.log('Cerrando sesion');
    var sql = '';
    Database.query(
      sql,
      [
        token_temporal
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

  this.buscaruser = function(token_temporal, cb) {
    console.log('buscando el id del usuario');
    var sql = 'SELECT id_user FROM session WHERE token_temporal = $1 RETURNING token_temporal';
    Database.query(
      sql,
      [
        token_temporal
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

  this.buscarperson = function(id_user, cb) {
    console.log('buscando el id de la persona');
    var sql = 'SELECT id_person FROM user WHERE id_user = $1 RETURNING id_person';
    Database.query(
      sql,
      [
        id_user
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

  this.addressid = function(id_person, cb) {
    console.log('consiguiendo la id de la direccion');
    var sql = 'SELECT id_address FROM addressbyperson WHERE id_person = $1 RETURNING id_address';
    Database.query(
      sql,
      [
        id_person
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

  this.address = function(id_address, cb) {
    console.log('Enviando direccion de la persona');
    var sql = 'SELECT * FROM address WHERE id_address = $1 RETURNING *';
    Database.query(
      sql,
      [
        id_address
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

  this.vehicleid = function(id_person, cb) {
    console.log('consiguiendo la id del vehiculo');
    var sql = 'SELECT id_vehicle FROM vehiclebyperson WHERE id_person = $1 RETURNING id_vehicle';
    Database.query(
      sql,
      [
        id_person
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

  this.vehicle = function(id_vehicle, cb) {
    console.log('Enviando informacion del vehiculo');
    var sql = 'SELECT * FROM vehicle WHERE id_vehicle = $1 RETURNING *';
    Database.query(
      sql,
      [
        id_vehicle
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

  this.phoneid = function(id_person, cb) {
    console.log('');
    var sql = 'SELECT id_telephone FROM telephonebyperson WHERE id_person = $1 RETURNING id_telephone';
    Database.query(
      sql,
      [
        id_person
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

  this.phone = function(id_telephone, cb) {
    console.log('');
    var sql = 'SELECT * FROM telephone WHERE id_telephone = $1 RETURNING *';
    Database.query(
      sql,
      [
        id_telephone
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
  var instancia = new Dbuser();
  instancia.init();
  return instancia;
};
