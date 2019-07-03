const Database = require('./DBmanager');

var Dbwallet = function(){

  

}

module.exports = function(){
  var instancia = new Dbwallet();
  instancia.init();
  return instancia;
};
