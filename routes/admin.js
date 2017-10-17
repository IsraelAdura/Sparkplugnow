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
    if (req.user._id == '59e24d02093092154ca24b97') {
        console.log(req.user._id)
        return next();
    }
    // res.redirect('users/login');
}

router.get('/delete/:id', isAdmin, function (req, res) {
    if (req.params.id == '59e24d02093092154ca24b97') {
        res.status(500).send('<h1>you cant delete an Admin! </h1>');
    } else {
        User.findByIdAndRemove(req.params.id, function (err, user) {
            // if (req.user.id)
            res.redirect('/admin');
            console.log(req.params.id, user)
        });
    }

})

router.get('/update/:id', isAdmin, function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) throw err;
        res.render('profile', { user: user });
    });
});

router.put('/update/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, function () {
        res.render('Done');
        console.log(req.params.id, user);
        res.redirect('/admin')
    })
})

module.exports = router;

