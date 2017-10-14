var express = require('express');
var router = express.Router();
var User = require('../models/users');


/* GET homepage. */
router.get('/', isAuthenticated, function(req, res, next) {
  User.getAllUsers(function(err,users){
    res.render('index', {users:users});
  })
});
 


function isAuthenticated(req,res,next){
  if (req.isAuthenticated()){
   // console.log(req.user.name)
    return next();
  } 
   // req.flash('error_msg','You are not logged in');
    res.redirect('users/login');
}


module.exports = router;
