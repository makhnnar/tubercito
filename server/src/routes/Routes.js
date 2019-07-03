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


// Export API routes
module.exports = router;