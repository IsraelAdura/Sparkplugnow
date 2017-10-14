var express = require('express');
var router = express.Router();
var User = require('../models/users');


/* GET adminpage. */
router.get('/admin', isAdmin, function (req, res, next) {
    User.getAllUsers(function (err, users) {
        res.render('admin', { users: users });
    })
})

function isAdmin(req, res, next) {
    if (req.user._id == '59e108a149fb435fd65f8a3d') {
        console.log(req.user._id)
        return next();
    }
    res.redirect('users/login');
}

router.delete('/delete/:id',isAdmin, function (req, res) {
    if (req.user._id != '59e108a149fb435fd65f8a3d') {
        User.findByIdAndRemove(req.params.id, function (err, user) {
            res.redirect('/admin');
            console.log(req.params.id, user)
        });
    }
    res.send(' <h1>you cant delete an Admin! </h1>');
})

router.get('/update/:id',isAdmin, function(req,res){
    res.render('userprofile');
})

/*router.put('/update/:id',function(req,res){
    User.findByIdAndUpdate(req.params.id,function(){
        res.render('Done');
        console.log(req.params.id, user);
    })
})*/
module.exports = router;

