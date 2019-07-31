const express = require('express');
const RouterUser = require('./user/User');
const router = express.Router();
let userInstance = new RouterUser();


router.route('/signup')
    .post(
        function(req,res){
            //listo
            userInstance.postCreateuser(req,res);
        }
    );

router.route('/login')
    .post(
        function(req,res){
            //listo, con algunos detalles faltantes
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

router.route('/request_travel')
    .post(
        function(req,res){
            //no terminado
            RouterTravel.postrequesttravel(req,res);
        }
);

router.route('/cancel_travel_request')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postcanceltravelrequest(req,res);
        }
);

router.route('/accept_travel_borrower')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postaccepttravelborrower(req,res);
        }
);

router.route('/cancel_travel_borrower')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postcanceltravelborrower(req,res);
        }
);

router.route('/accept_service_from_driver')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postacceptservicefromdriver(req,res);
        }
);

router.route('/teminate_travel_relation')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postteminatetravelrelation(req,res);
        }
);

router.route('/travel_success')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postuserphones(req,res);
        }
);

// Export API routes
module.exports = router;