const express = require('express');
const RouteUser =require ('./user/User');
const router = express.Router();

//export default router;


// Set default API response

// Contact routes
router.route('/signup')
    .post(
        function(req,res){
            RouteUser.postCreateuser(req,res);
        }
    );

router.route('/login')
    .post(
        function(req,res){
            RouteUser.postlogin(req,res);
        }
);

router.route('/logout')
    .post(
        function(req,res){
            RouteUser.postlogout(req,res);
        }
);

router.route('/user_address')
    .post(
        function(req,res){
            RouteUser.postuseraddress(req,res);
        }
);

router.route('/user_vehicles')
    .post(
        function(req,res){
            RouteUser.postuservehicles(req,res);
        }
);

router.route('/user_phones')
    .post(
        function(req,res){
            RouteUser.postuserphones(req,res);
        }
);

router.route('/request_travel')
    .post(
        function(req,res){
            RouterTravel.postrequesttravel(req,res);
        }
);

router.route('/cancel_travel_request')
    .post(
        function(req,res){
            RouterTravel.postcanceltravelrequest(req,res);
        }
);

router.route('/accept_travel_borrower')
    .post(
        function(req,res){
            RouterTravel.postaccepttravelborrower(req,res);
        }
);

router.route('/cancel_travel_borrower')
    .post(
        function(req,res){
            RouterTravel.postcanceltravelborrower(req,res);
        }
);

router.route('/accept_service_from_driver')
    .post(
        function(req,res){
            RouterTravel.postacceptservicefromdriver(req,res);
        }
);

router.route('/teminate_travel_relation')
    .post(
        function(req,res){
            RouterTravel.postteminatetravelrelation(req,res);
        }
);

router.route('/travel_success')
    .post(
        function(req,res){
            RouterTravel.postuserphones(req,res);
        }
);

// Export API routes
module.exports = router;