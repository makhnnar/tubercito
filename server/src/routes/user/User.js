const manager = require('../../db/DBmanagerUser');
const md5 = require('md5');

const managerInstace = new manager();

var RouterUser = function(){

  this.postCreateuser = function(req,res){
    console.log(' ');
    console.log('valores ingresados: '+JSON.stringify(req.body));
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
          let aux1 = result[0].id_person;
          managerInstace.createwallet(
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'No se pudo acceder'
                });
              }else{
                let aux2 = result[0].id_wallet;
                managerInstace.createuser(
                  valor.username,
                  valor.password,
                  aux1,
                  aux2,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created user'
                      });
                    }else{
                      managerInstace.createsession(
                        result[0].id_user,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created user'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'user created'
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
  
  this.postlogin = function (req,res){
    console.log(' ');
    console.log('valores ingresados: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.login(
      valor.username,
      valor.password,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder al usuario'
          });
        }else{
          console.log(' este: '+JSON.stringify(result[0]));
          let aux1 = result[0].id_user;
          let username = result[0].username;
          let aux2 = result[0].id_person;
          let aux3 = md5(aux1);        
          managerInstace.loginperson(
            aux2,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no se pudo acceder a persona'
                });
              }else{
                let first_name = result[0].first_name;
                let last_name = result[0].last_name;
                let email = result[0].email;
                let gender = result[0].gender;
                let birthday = result[0].birthday;
                managerInstace.loginsession(
                  aux1,
                  aux3,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no se pudo acceder a session'
                      });
                    }else{
                      let temporal_token = result[0].temporal_token;
                      res.send({
                        status:'success',
                        msj:'Wellcome Back',
                        data:{
                          first_name,
                          last_name,
                          username,
                          email,
                          gender,
                          birthday,
                          temporal_token
                        }
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
    console.log('valores ingresados: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.logout(
      valor.temporal_token,
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

  //---------------------------------------------------------------------------
  
  this.postuseraggaddress = function (req,res){
    console.log(' ');
    console.log('valores ingresados: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.temporal_token,
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
                console.log(JSON.stringify(result[0]));
                console.log(result.id_person);
                //console.log(result[0]);
                res.send({
                  status:'ERROR',
                  //data:console.log()
                })
                /*let id_persoon = result[0].id_person;
                managerInstace.createdaddress(
                  valor.country,
                  valor.state,
                  valor.city,
                  valor.comunity,
                  valor.street,
                  valor.house,
                  valor.block,
                  valor.latitude,
                  valor.longitude,
                  result.id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstace.createdaddressbyperson(
                        result[0].id_address,
                        id_persoon,
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
                );*/
              }
            }
          );
        }
      }
    );
  };
//------------------------------------------------------------------------------------
  this.postuseraddress = function (req,res){
    console.log(' ');
    console.log('valores ingresados: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstace.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstace.addressbyperson(
                  result[0].id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstace.address(
                        result[0].id_address,
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
    console.log('valores ingresados: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.temporal_token,
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
    console.log('valores ingresados: '+JSON.stringify(req.body));
    console.log(' ');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstace.buscaruser(
      valor.temporal_token,
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