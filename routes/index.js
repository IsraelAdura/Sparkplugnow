var express = require('express');
var router = express.Router();
var User = require('../models/users');


/* GET homepage. */
router.get('/', isAuthenticated, function (req, res, next) {
  User.getAllUsers(function (err, users) {
    res.render('index', { users: users });
  })
});

router.get('/profile', isAuthenticated, function (req, res) {
  res.render('profile')
})

router.get('/user/:username', isAuthenticated, function (req, res) {
  User.getAllUsers(function (err, users) {
    User.getUserByUsername(req.params.username, function (err, user) {
      if (err) throw err;
      res.render('user', {
        view: user,
        users: users
      });
    });
  });
});

router.post('/update/:id', isAuthenticated, function (req, res) {
  /*User.updateUser({_id:req.params.id}, req.body, function (err, user) {
    if (err) { throw err };
    User.getUserById(req.params.id, function (err, user) {
      if (err) { throw err };
      console.log(user);
      res.send('done');
    })
  })*/
  User.findByIdAndUpdate({_id:req.params.id}, req.body, function (err, user) {
    if (err) throw err;

    // we have the updated user returned to us
    console.log(user);
  });
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // console.log(req.user.name)
    return next();
  }
  // req.flash('error_msg','You are not logged in');
  res.redirect('users/login');
}


module.exports = router;
