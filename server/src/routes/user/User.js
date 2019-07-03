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
                  result[0].id_persona,
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

  this.postlogin = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.login(
      valor.email,
      valor.password,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          manager.loginperson(
            result.id_persona,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                res.send({
                  status:'success',
                  msj:'Wellcome Back',
                  data:result
                });
              }
            }
          );
        }
      }
    );
  }

  this.postlogout = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.logout(
      valor.token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
            status:'success',
            msg:'enviando usario',
            data:result
            });
        }
      }
    );
  }

  this.postuser_address = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.user_address(
      valor.token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
            status:'success',
            msg:'enviando usario',
            data:result
            });
        }
      }
    );
  }

  this.postuser_vehicle = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.user_vehicle(
      valor.token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
            status:'success',
            msg:'enviando usario',
            data:result
            });
        }
      }
    );
  }

  this.postuser_phones = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.user_phones(
      valor.token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
            status:'success',
            msg:'enviando usario',
            data:result
            });
        }
      }
    );
  }

  /*
  this.postlogin = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.login(
      valor.email,
      valor.password,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
          status:'success',
          msg:'enviando usario',
          data:result
          });
        }
      }
    );
  });
  */

}

module.exports = function(){
  var instancia = new RouterUser();
  return instancia;
};

/* 

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
                  result[0].id_persona,
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

*/