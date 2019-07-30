const express = require('express');
const RouterUser = require('./user/User');
const router = express.Router();
const md5 = require('md5');
let userInstance = new RouterUser();

//userInstance.test();

/*router.route('/test')
    .post(
        function(req,res){
            //console.log('recieving from app: '+JSON.stringify(req.body));
            //console.log(req.body)
            res.send({
                status:'success',
                data2:console.log(md5('message')),
                data3:md5('message')
            });
        }
    );*/

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

router.route('/user_aggaddress')
    .post(
        function(req,res){
            userInstance.postuseraggaddress(req,res);
        }
);

router.route('/user_address')
    .post(
        function(req,res){
            userInstance.postuseraddress(req,res);
        }
);

router.route('/user_vehicles')
    .post(
        function(req,res){
            //en espera
            //userInstance.postuservehicles(req,res);
        }
);

router.route('/user_phones')
    .post(
        function(req,res){
            //en espera
            //userInstance.postuserphones(req,res);
        }
);

router.route('/request_travel')
    .post(
        function(req,res){
            //en espera
            //RouterTravel.postrequesttravel(req,res);
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