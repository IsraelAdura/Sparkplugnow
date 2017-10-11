var express = require('express');
var router = express.Router();

function isAdmin(req,res,next){
   // if (req.username ==''){
  //    return next();
    } 

router.get('/admin', isAdmin,function(req,res){
    res.render('admin-dashboard');
})

module.exports = router;