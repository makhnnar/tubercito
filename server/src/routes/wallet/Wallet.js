const managerwallet = require('../../db/DBmanagerWallet');
const manageruser = require('../../db/DBmanagerUser');


const managerInstacewallet = new managerwallet();
const managerInstaceUser = new manageruser();


var RouterWallet = function(){

  this.movimientoWallet = function (req,res){
    console.log('valores ingresados ---> '+JSON.stringify(req.body));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    let valor = req.body;
    managerInstaceUser.buscaruser(
      valor.token_user,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          managerInstancewallet.buscaridwallet(
            result[0].id_user,
            (error,result) =>{
              if (error) {
                res.send({
                  status:'error',
                  data:'No se pudo acceder'
                });   
              } else {
                                
              }
            }
          );
        }
      );
    }

    /*

    managerInstancewallet.buscaridwallet(
      result[0].id_user,
      (error,result) =>{
        if (error) {
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });   
        } else {
          
        }
      }
    );

    managerInstaceUser.buscaruser(
      valor.temporal_token,
      (error,result) => {
        if(error){
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        }else{
          
        }
      );
    }
    
    managerInstacewallet.updatewallet(
      valor.id_wallet,
      valor.cuantity,
      (error,resultado)=>{
        if (error) {
          res.send({
            status:'error',
            data:'No se pudo acceder'
          });
        } else {
          res.send({
            status:'success'
          });
        }
      }
    );
    
    */
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
  
  }

}

module.exports = function(){
  var instancia = new RouterWallet();
  return instancia;
};