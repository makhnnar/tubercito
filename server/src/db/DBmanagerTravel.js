const manager = require('./DBmanager');

var Dbtravel = function(){

  this.travelrequest = function(token_temporal, cb) {
    console.log('');
    var sql = '';
    manager.query(
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

  this.travelrequest = function(token_temporal, cb) {
    console.log('');
    var sql = '';
    manager.query(
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

  

}

module.exports = function(){
  var instancia = new Dbtravel();
  instancia.init();
  return instancia;
};
