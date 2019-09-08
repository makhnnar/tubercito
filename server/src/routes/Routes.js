const express = require('express');
const RouterUser = require('./user/User');
const RouterTravel = require('./travel/Travel');
const router = express.Router();
let userInstance = new RouterUser();
let travelInstance = new RouterTravel();


router.route('/signup')
    .post(
        function(req,res){
            //Detalle faltante: *  Tipo de usuario
            userInstance.postCreateuser(req,res);
        }
    );

router.route('/login')
    .post(
        function(req,res){
            //Detalles faltantes:  *Tokens temporales * Tiempo del sistema
            userInstance.postlogin(req,res);
        }
);

router.route('/logout')
    .post(
        function(req,res){
            //en espera
            //userInstance.postlogout(req,res);
        }
);

router.route('/user_createdaddress')
    .post(
        function(req,res){
            //listo
            userInstance.postusercreatedaddress(req,res);
        }
);

router.route('/user_address')
    .post(
        function(req,res){
            //listo
            userInstance.postuseraddress(req,res);
        }
);

router.route('/user_createdvehicles')
    .post(
        function(req,res){
            //listo
            userInstance.postusercreatedvehicle(req,res);
        }
);

router.route('/user_vehicles')
    .post(
        function(req,res){
            //listo
            userInstance.postuservehicles(req,res);
        }
);

router.route('/user_createdtelephones')
    .post(
        function(req,res){
            userInstance.postusercreatedtelephones(req,res);
        }
);

router.route('/user_telephones')
    .post(
        function(req,res){
            userInstance.postusertelephones(req,res);
        }
);

router.route('/user_changetypeuser')
    .post(
        function(req,res){
            userInstance.postchangetypeuser(req,res);
        }
);

router.route('/request_travel')
    .post(
        function(req,res){
            //no terminado
            travelInstance.postrequestravel(req,res);
        }
);

router.route('/cancel_travel_request')
    .post(
        function(req,res){
            //esperando algunos cambios
            travelInstance.postcanceltravelrequest(req,res);
        }
);

router.route('/accept_travel_borrower')
    .post(
        function(req,res){
            travelInstance.postacceptravelborrower(req,res);
        }
);

router.route('/cancel_travel_borrower')
    .post(
        function(req,res){
            travelInstance.postcanceltravelborrower(req,res);
        }
);

router.route('/accept_service_from_driver')
    .post(
        function(req,res){
            //en espera
            //travelInstance.postacceptservicefromdriver(req,res);
        }
);

router.route('/teminate_travel_relation')
    .post(
        function(req,res){
            travelInstance.postcanceltravelrequest(req,res);
        }
);

router.route('/travel_success')
    .post(
        function(req,res){
            //en espera
            //travelInstance.postuserphones(req,res);
        }
);

router.route('/date')
    .post(
        function(req,res){
            var date = new Date();
            var current_hour = date.getHours();
            res.send({
                status:'***',
                msj:current_hour
              });
        }
);

// Export API routes
module.exports = router;