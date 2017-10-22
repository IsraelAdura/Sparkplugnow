var express = require('express');
var router = express.Router();
var User = require('../models/users');

var multer = require('multer');

var image = require('./image');
image.multer
var upload = image.upload



/* GET homepage. */
router.get('/', isAuthenticated, function (req, res, next) {
  console.log(req.user);
  User.getAllUsers(function (err, users) {
    res.render('index', { users: users });
  })
});

router.get('/profile', isAuthenticated, function (req, res) {
  res.render('profile');
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

router.get('/image', isAuthenticated, function (req, res) {
  User.getAllUsers(function (err, users) {
    res.render('image', { users: users });
  })
})
router.post('/updateImage/:id',upload.any(), function (req, res) {
  console.log(req.files[0].originalname)
    User.findByIdAndUpdate({ _id: req.params.id },{picture:{
      originalname:req.files[0].originalname}
    }, function (err, user) {
      if (err) { throw err };
      res.render('index');
  })
})
router.post('/update/:id', isAuthenticated, function (req, res) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err, user) {
    if (err) { throw err };
    res.render('index');
  })
})

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // console.log(req.user.name)
    return next();
  }
  // req.flash('error_msg','You are not logged in');
  res.redirect('users/login');
}


module.exports = router;