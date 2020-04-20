const managertravel = require('../../db/DBmanagerTravel');
const manageruser = require('../../db/DBmanagerUser');
const managerSocket = require('./../../socket/SocketManager.js');


const managerInstacetravel = new managertravel();
const managerInstaceuser = new manageruser();
const managerInstanceSocket = new managerSocket();

var RouterTravel = function(){

  this.postrequestravel = function (req,res){
    console.log('valores: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceuser.buscaruser(
      valor.token_temporal,
      (error,result) => {
        if(error){
            res.send({
                status:'error',
                msj:'No se pudo acceder'
            });
        }else{
          let id_user = result[0].id_user;
          managerInstaceuser.createdaddress(
            valor.address_origin.country,
            valor.address_origin.state,
            valor.address_origin.city,
            valor.address_origin.comunity,
            valor.address_origin.street,
            valor.address_origin.house,
            valor.address_origin.block,
            valor.address_origin.latitude,
            valor.address_origin.longitude,
            (error,result) =>{
              if (error) {
                res.send({
                  status:'error',
                  msj:'No se pudo acceder'
                });
              } else {
                managerInstacetravel.createdorigintravel(
                  id_user,
                  result[0].id_address,
                  (error,result) =>{
                    if (error) {
                      res.send({
                        status:'error',
                        msj:'No se pudo acceder'
                      });
                    } else {
                      let id_travel = result[0].id_travel;
                      managerInstaceuser.createdaddress(
                        valor.address_destination.country,
                        valor.address_destination.state,
                        valor.address_destination.city,
                        valor.address_destination.comunity,
                        valor.address_destination.street,
                        valor.address_destination.house,
                        valor.address_destination.block,
                        valor.address_destination.latitude,
                        valor.address_destination.longitude,
                        (error,result) => {
                          if (error) {
                            res.send({
                              status:'error',
                              msj:'No se pudo acceder'
                            });   
                          } else {
                            managerInstacetravel.createddestinationtravel(
                              result[0].id_address,
                              id_travel,
                              (error,result) => {
                                if (error) {
                                  res.send({
                                    status:'error',
                                    msj:'No se pudo acceder'
                                  });
                                } else {
                                  managerInstanceSocket.pruebasocket(
                                    (error,result) => {
                                      if (error) {
                                        res.send({
                                          status:'error',
                                          data:'No se pudo acceder'
                                        });
                                      } else {
                                        res.send({
                                          status:'success',
                                          msg:'envia los valores del viaje'
                                        });
                                      }
                                    }
                                  );
                                  res.send({
                                    status:'success',
                                    msj:'travel created',
                                    data:id_travel
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
    );
  };

  this.postcanceltravelrequest = function (req,res){
    console.log('valores: '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceuser.getinformationtravel(
      valor.id_travel,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          let id_destination_travel = result[0].id_destination_travel;
          managerInstacetravel.deleteaddress(
            result[0].id_origin_address,
            (error,result) => {
              if (error) {
                res.send({
                  status:'error',
                  data:'No se pudo acceder'
                });
              } else {
                managerInstacetravel.deleteaddress(
                  id_destination_travel,
                  (error,result)=>{
                    if (error) {
                      res.send({
                        status:'error',
                        data:'No se pudo acceder'
                      });
                    } else {
                      managerInstacetravel.deletetravel(
                        valor.id_travel,
                        (error,result) => {
                          if (error) {
                            res.send({
                              status:'error',
                              data:'No se pudo acceder'
                            });
                          } else {
                            res.send({
                              status:'success',
                              msg:'Travel canceled'
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

  this.postacceptravelborrower = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    manageruser.buscaruser(
      valor.token_temporal,
      (error,result) =>{
        if (error) {
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        } else {
          managerInstacetravel.acceptborrower(
            valor.id_travel,
            result[0].id_user,
            (error,result) => {
              if (error) {
                res.send({
                  status:'error',
                  data:'No se pudo acceder'
                });
              } else {
                res.send({
                  status:'success',
                  msj:'travel Borrowed. You need to wait until user confirmation'
                });
              }
            }
          );
        }
      }
    );
  };


  this.postcanceltravelborrower = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstacetravel.canceledborrower(
      valor.id_travel,
      (error,result) =>{
        if (error) {
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        } else {
          res.send({
            status:'success',
            msj:'travel Borrowed canceled'
          });  
        }
      }
    );
  };

  /*this. = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    
  }

  this. = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    
  }

  this. = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    
  }

  this. = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    
  }

  this. = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    
  }

  this. = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    
  }*/

}

module.exports = function(){
  var instancia = new RouterTravel();
  return instancia;
};