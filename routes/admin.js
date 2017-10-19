var express = require('express');
var router = express.Router();
var User = require('../models/users');


/* GET adminpage. */
router.get('/', isAdmin, function (req, res, next) {
    User.getAllUsers(function (err, users) {
        res.render('admin', { users: users });
    })
})

function isAdmin(req, res, next) {
    if (req.user._id =='59e676bf8e793114beb50faf') {
        console.log(req.user._id)
        return next();
    }
    // res.redirect('users/login');
}

router.get('/delete/:id', isAdmin, function (req, res) {
    if (req.params.id =='59e676bf8e793114beb50faf') {
        res.status(500).send('<h1>you cant delete an Admin! </h1>');
    } else {
        User.findByIdAndRemove(req.params.id, function (err, user) {
            // if (req.user.id)
            res.redirect('/admin');
            console.log(req.params.id, user);
        });
    }
})

router.get('/update/:id', isAdmin, function (req, res) {
    User.getUserById(req.params.id, function (err, user) {
        if (err) throw err;
        res.render('profile', { user: user });
    });
});

module.exports = router;

