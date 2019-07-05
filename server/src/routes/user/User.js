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
            data:'no created type user'
          });
        }else{
          manager.createperson(
            valor.firts_name,
            valor.last_name,
            valor.email,
            valor.gender,
            valor.birthday,
            result.id_user_type,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created person'
                });
              }else{
                manager.createuser(
                  valor.username,
                  valor.password,
                  result[0].id_person,
                  result.id_user_type,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created user'
                      });
                    }else{
                      res.send({
                        status:'success',
                        data:'User created'
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
            result.id_person,
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
  }

  this.postuser_address = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          manager.buscarperson(
            result.id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                manager.addressid(
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      manager.address(
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
  }

  this.postuser_vehicle = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          manager.buscarperson(
            result.id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                manager.vehicleid(
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      manager.vehicle(
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
  }

  this.postuser_phones = function (req,res){
    console.log(' ');
    console.log('valores: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manager.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          manager.buscarperson(
            result.id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                manager.phoneid(
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      manager.phone(
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
  }

}

module.exports = function(){
  var instancia = new RouterUser();
  return instancia;
};