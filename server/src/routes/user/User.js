const manageruser = require('../../db/DBmanagerUser');
const md5 = require('md5');

const managerInstaceUser = new manageruser();

var RouterUser = function(){

  this.postCreateuser = function(req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.createperson(
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
          managerInstaceUser.createwallet(
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'No se pudo acceder'
                });
              }else{
                let aux2 = result[0].id_wallet;
                managerInstaceUser.createuser(
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
                      managerInstaceUser.createsession(
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
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.login(
      valor.username,
      valor.password,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder al usuario'
          });
        }else{
          let aux1 = result[0].id_user;
          let username = result[0].username;
          let aux2 = result[0].id_person;
          let aux3 = md5(aux1);        
          managerInstaceUser.loginperson(
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
                managerInstaceUser.loginsession(
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
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.logout(
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
  
  this.postusercreatedaddress = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstaceUser.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                let id_person = result[0].id_person;
                managerInstaceUser.createdaddress(
                  valor.country,
                  valor.state,
                  valor.city,
                  valor.comunity,
                  valor.street,
                  valor.house,
                  valor.block,
                  valor.latitude,
                  valor.longitude,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstaceUser.createdaddressbyperson(
                        result[0].id_address,
                        id_person,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created data'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'Address Created'
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

  this.postuseraddress = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstaceUser.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstaceUser.addressbyperson(
                  result[0].id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstaceUser.address(
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
                              msj:'Address Created'
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

  this.postusercreatedvehicle = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstaceUser.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                let aux1 = result[0].id_person;
                managerInstaceUser.createdvehicle(
                  valor.color,
                  valor.brand,
                  valor.model,
                  valor.year,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstaceUser.createdvehiclebyperson(
                        result[0].id_vehicle,
                        aux1,
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
                              data:result[0]
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

  this.postuservehicles = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstaceUser.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstaceUser.vehicleid(
                  result[0].id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstaceUser.vehicle(
                        result[0].id_vehicle,
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
                              data:result[0]
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

  this.postusercreatedtelephones = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstaceUser.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                let aux1 = result[0].id_person;
                managerInstaceUser.createdtelephone(
                  valor.area_code,
                  valor.operator,
                  valor.number,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstaceUser.createdtelephonebyperson(
                        result[0].id_telephone,
                        aux1,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created data'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'Created Telephone',
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

  this.postusertelephones = function (req,res){
    console.log('valores ingresados: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstaceUser.buscarperson(
            result[0].id_user,
            (error,result) => {
              if(error){
                res.send({
                  status:'error',
                  data:'no created data'
                });
              }else{
                managerInstaceUser.telephoneid(
                  result[0].id_person,
                  (error,result) => {
                    if(error){
                      res.send({
                        status:'error',
                        data:'no created data'
                      });
                    }else{
                      managerInstaceUser.telephone(
                        result[0].id_telephone,
                        (error,result) => {
                          if(error){
                            res.send({
                              status:'error',
                              data:'no created data'
                            });
                          }else{
                            res.send({
                              status:'success',
                              msj:'Telephone',
                              data:result[0]
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