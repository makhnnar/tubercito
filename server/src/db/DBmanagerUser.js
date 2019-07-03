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

  this.createperson = function(firts_name,last_name,email,gender,birthday, cb) {
    console.log('crear persona');
    var sql = 'INSERT INTO persona(firts_name, last_name, email, gender, birthday) VALUES($1, $2, $3, $4, $5) RETURNING id_persona';
    Database.query(
      sql,
      [
        firts_name,
        last_name,
        email,
        gender,
        birthday
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

  this.createuser = function(username, password, cb) {
    console.log('Crear tipo de usuario');
    var sql = 'INSERT INTO user(username, password) VALUES($1, $2) RETURNING id_user';
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
  
  this.login = function(username, password, cb) {
    console.log('Revisara si existe el usuario');
    var sql = 'SELECT * FROM user WHERE username = $1, password = $2 RETURNING id_persona';
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
  this.loginperson = function(id_persona, cb) {
    console.log('Buscar datos de persona');
    var sql = 'SELECT * FROM user WHERE username = $1, password = $2 RETURNING *';
    Database.query(
      sql,
      [
        id_persona
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

  this.logout = function(token, cb) {
    console.log('Cerrando sesion');
    var sql = '';
    Database.query(
      sql,
      [
        token
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

  this.user_address = function(token, cb) {
    console.log('Direccion del usuario');
    var sql = '';
    Database.query(
      sql,
      [
        token
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

  this.user_vehicles = function(token, cb) {
    console.log('Direccion del usuario');
    var sql = '';
    Database.query(
      sql,
      [
        token
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

  this.user_phones = function(token, cb) {
    console.log('Direccion del usuario');
    var sql = '';
    Database.query(
      sql,
      [
        token
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
