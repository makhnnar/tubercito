const Database = require('./DBmanager');

var Dbtravel = function(){

    this.travel_request = function(token, cb) {
        console.log('Obtener direccion');
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
  var instancia = new Dbtravel();
  instancia.init();
  return instancia;
};
