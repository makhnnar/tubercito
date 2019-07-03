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
        RouteUser.postuser_address(req,res);
    }
);

router.route('/user_vehicles')
.post(
    function(req,res){
        RouteUser.postuser_vehicles(req,res);
    }
);

router.route('/user_phones')
.post(
    function(req,res){
        RouteUser.postuser_phones(req,res);
    }
);

// Export API routes
module.exports = router;