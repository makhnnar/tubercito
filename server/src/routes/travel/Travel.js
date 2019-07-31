const managertravel = require('../../db/DBmanagerTravel');
const manageruser = require('../../db/DBmanagerUser');

const managerInstacetravel = new managertravel();
const managerInstaceuser = new manageruser();

var RouterTravel = function(){

    this.postrequesttravel = function (req,res){
        console.log(' ');
        console.log('valores: '+JSON.stringify(req.body));
        console.log(' ');
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
                country,
                state,
                city,
                comunity,
                street,
                house,
                block,
                latitude,
                longitude,
                (error,result) =>{
                  if (error) {
                    res.send({
                      status:'error',
                      msj:'No se pudo acceder'
                    });
                  } else {
                    managerInstacetravel.createdorigintravel(
                      id_user,
                      result[0].address,
                      (error,result) =>{
                        if (error) {
                          res.send({
                            status:'error',
                            msj:'No se pudo acceder'
                          });
                        } else {
                          let id_travel = result[0].id_travel;
                          managerInstaceuser.createdaddress(
                            country,
                            state,
                            city,
                            comunity,
                            street,
                            house,
                            block,
                            latitude,
                            longitude,
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
    }

    this.postcanceltravelrequest = function (req,res){
        console.log(' ');
        console.log('valores: '+JSON.stringify(req.body));
        console.log(' ');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        let valor = req.body;
        manager.(
          valor.id_travel,
            (error,result) => {
                if(error){
                    res.send({
                        status:'error',
                        data:'No se pudo acceder'
                    });
                }else{
                    res.send({
                        status:'success',
                        msg:'Travel canceled'
                    });
                }
            }
        );
    }

}

module.exports = function(){
  var instancia = new RouterTravel();
  return instancia;
};

/*
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
*/