const Database = require('./DBmanager');

const dataInstance = new Database();

var Dbuser = function(){

  this.createperson = function(first_name,last_name,email,gender,birthday, cb) {
    console.log('crear persona');
    var sql = 'INSERT INTO person (first_name, last_name, email, gender, birthday) VALUES($1, $2, $3, $4, $5) RETURNING id_person';
    dataInstance.query(
      sql,
      [
        first_name,
        last_name,
        email,
        gender,
        birthday,
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

  this.createwallet = function(cb) {
    let val = 0;
    console.log('Crear usuario');
    var sql = 'INSERT INTO wallet (cuantity) VALUES($1) RETURNING id_wallet';
    dataInstance.query(
      sql,
      [
        val
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

  this.createuser = function(username, password, aux1, aux2, cb) {
    console.log('Crear usuario');
    let id_user_type = 1;
    let is_enable= 'true';
    var sql = 'INSERT INTO users (username, password, id_person, id_user_type, is_enable, id_wallet) VALUES($1, $2, $3, $4, $5, $6) RETURNING id_user';
    dataInstance.query(
      sql,
      [
        username,
        password,
        aux1,
        id_user_type,
        is_enable,
        aux2
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

  this.createsession = function(id_user, cb) {
    console.log('Crear usuario');
    var sql = 'INSERT INTO session (id_user) VALUES($1)';
    dataInstance.query(
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
  
  this.login = function(username, password, cb) {
    console.log('Revisara si existe el usuario');
    var sql = 'SELECT id_user, username, id_person FROM users WHERE username = $1 and password = $2';
    dataInstance.query(
      sql,
      [
        username,
        password
      ],
      () => {
        cb(true,null);
      },
      (res) => {
        if (res[0]!=null) {
          console.log(JSON.stringify(res));
          cb(null,res);
        } else {
          console.log(JSON.stringify(res));
          cb(true,null);
        }
        
      }
    );
  };

  this.loginperson = function(aux2, cb) {
    console.log('Buscar datos de persona');
    var sql = 'SELECT first_name, last_name, email, gender, birthday FROM person WHERE id_person = $1';
    dataInstance.query(
      sql,
      [
        aux2
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

  this.loginsession = function(aux1, aux3, cb) {
    console.log('Buscar token');
    var sql = 'UPDATE session SET temporal_token = $2 WHERE id_user =$1 RETURNING temporal_token';
    dataInstance.query(
      sql,
      [
        aux1,
        aux3
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

  this.logout = function(temporal_token, cb) {
    console.log('Cerrando sesion');
    var sql = '';
    dataInstance.query(
      sql,
      [
        temporal_token
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

  this.buscaruser = function(temporal_token, cb) {
    console.log('buscando el id del usuario');
    var sql = 'SELECT id_user FROM session WHERE temporal_token = $1';
    dataInstance.query(
      sql,
      [
        temporal_token
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
    var sql = 'SELECT id_person FROM users WHERE id_user = $1';
    dataInstance.query(
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

  this.createdaddress = function(country, state, city, comunity, street, house, block, latitude, longitude, cb) {
    console.log('creando la direccion');
    var sql = 'INSERT INTO address(country, state, city, comunity, street, house, block, latitude, longitude) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id_address';
    dataInstance.query(
      sql,
      [
        country,
        state,
        city,
        comunity,
        street,
        house,
        block,
        latitude,
        longitude,
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

    this.createdaddressbyperson = function(id_address, id_person, cb) {
    console.log('creando la id de la direccion');
    var sql = 'INSERT INTO addressbyperson(id_address, id_person) VALUES($1, $2)';
    dataInstance.query(
      sql,
      [
        id_address,
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

  this.addressbyperson = function(id_person, cb) {
    console.log('consiguiendo la id de la direccion');
    var sql = 'SELECT id_address FROM addressbyperson WHERE id_person = $1';
    dataInstance.query(
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
    var sql = 'SELECT * FROM address WHERE id_address = $1';
    dataInstance.query(
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

  this.createdvehiclebyperson = function(id_vehicle, id_person, cb) {
    console.log('Creando la id del vehiculo');
    var sql = 'INSERT INTO vehiclebyperson(id_vehicle, id_person) VALUES ($1, $2)';
    dataInstance.query(
      sql,
      [
        id_vehicle,
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

  this.vehicleid = function(id_person, cb) {
    console.log('consiguiendo la id del vehiculo');
    var sql = 'SELECT id_vehicle FROM vehiclebyperson WHERE id_person = $1';
    dataInstance.query(
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

  this.createdvehicle = function(color, brand, model, year, cb) {
    console.log('Creando informacion del vehiculo');
    var sql = 'INSERT INTO vehicle(color, brand, model, year) VALUES ($1, $2, $3, $4) RETURNING id_vehicle';
    dataInstance.query(
      sql,
      [
        color,
        brand,
        model,
        year
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
    var sql = 'SELECT * FROM vehicle WHERE id_vehicle = $1';
    dataInstance.query(
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

  this.createdtelephonebyperson = function(id_telephone, id_person, cb) {
    console.log('Creando el id de telefono por usuario');
    var sql = 'INSERT INTO telephonebyperson(id_telephone, id_person) VALUES($1, $2)';
    dataInstance.query(
      sql,
      [
        id_telephone,
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

  this.telephoneid = function(id_person, cb) {
    console.log('Obteniendo id de telefono por usuario');
    var sql = 'SELECT id_telephone FROM telephonebyperson WHERE id_person = $1';
    dataInstance.query(
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

  this.createdtelephone = function(area_code, operator, number, cb) {
    console.log('Creando datos de telefono de usuario');
    var sql = 'INSERT INTO telephone(area_code, operator, number) VALUES ($1, $2, $3) RETURNING id_telephone';
    dataInstance.query(
      sql,
      [
        area_code,
        operator,
        number
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

  this.telephone = function(id_telephone, cb) {
    console.log('Obteniendo datos de telefono del usuario');
    var sql = 'SELECT * FROM telephone WHERE id_telephone = $1';
    dataInstance.query(
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
  return instancia;
};
