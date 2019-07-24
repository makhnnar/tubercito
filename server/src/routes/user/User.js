const manager = require('../../db/DBmanagerUser');

const managerInstace = new manager();

var RouterUser = function(){

  /*this.test=function(){
    console.log('hola');
  };*/

  this.postCreateuser = function(req,res){
    console.log(' ');
    console.log('Valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.createperson(
      valor.first_name,
      valor.last_name,
      valor.email,
      valor.gender,
      valor.birthday,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'no created person'
          });
        }else{
          managerInstace.createuser(
            valor.username,
            valor.password,
            result.id_person,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created user'
                });
              }else{
                res.send({
                  status:'success',
                  data:result
                });
              }
            }
          );
        }
      }
    );
  };

  this.postlogin = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.login(
      valor.email,
      valor.password,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          let aux = result.id_user;
          managerInstace.loginperson(
            result.id_person,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                let aux2=result;
                managerInstace.loginsession(
                  aux,
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
                        data1:aux2+result
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
  };

  this.postlogout = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.logout(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          res.send({
            status:'success',
            msg:'Logout'
          });
        }
      }
    );
  };

  this.postuser_address = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstace.buscarperson(
            result.id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstace.addressid(
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstace.address(
                        result.id_address,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created data'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'Address',
                              data:result
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
    );
  };

  this.postuser_vehicle = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstace.buscarperson(
            result.id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstace.vehicleid(
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstace.vehicle(
                        result.id_address,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created data'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'Address',
                              data:result
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
    );
  };

  this.postuser_phones = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstace.buscarperson(
            result.id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstace.phoneid(
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstace.phone(
                        result.id_telephone,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created data'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'Address',
                              data:result
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
    );
  };

}

module.exports = function(){
  var instancia = new RouterUser();
  return instancia;
};