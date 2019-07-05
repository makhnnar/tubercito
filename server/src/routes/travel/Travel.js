const manager = require('../../db/DBmanagerTravel');

var RouterTravel = function(){

    this.postrequest_travel = function (req,res){
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