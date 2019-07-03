const manager = require('../../db/DBmanagerUser');

var RouterUser = function(){
  this.postCreateuser = function(req,res){
    console.log(' ');
    console.log('Valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.typeuser(
      valor.description,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'no created data'
          });
        }else{
          manager.createperson(
            valor.firts_name,
            valor.last_name,
            valor.email,
            valor.gender,
            valor.birthday,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                manager.createuser(
                  valor.username,
                  valor.password,
              // result[0].id_persona,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      res.send({
                        status:'success',
                        data:'data created'
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  }
}

module.exports = function(){
  var instancia = new RouterUser();
  return instancia;
};