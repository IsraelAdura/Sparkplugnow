var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Passport = require('./passport');


var User = require('../models/users');
var Image = require('../models/image');


var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
});


//signup
router.get('/register', function (req, res) {
  res.render('register');
});

//login
router.get('/login', function (req, res) {
  res.render('login');
  //console.log(req);
});

router.post('/register', upload.any(), function (req, res) {


  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;
  var about = req.body.about;
  //var role = req.body.skills;
  var skills = req.body.skills;
  var picture = req.files.picture;

  //req.body validation
  req.checkBody('name', 'name is required').notEmpty();
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('email', 'email is required').notEmpty();
  req.checkBody('email', 'enter valid email').isEmail();
  req.checkBody('password', 'password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  //req.checkBody('picture')

  var errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors: errors
    });
  } else {
    //  console.log('passed');
    var newUser = new User({
      name: name,
      username: username,
      email: email,
      password: password,
      about: about,
      skills: skills,
      picture: {
        originalname: req.files[0].originalname
      }

    })
    User.createUser(newUser, function (err, user) {
      if (err) { throw err };
      console.log(user);
    });
    req.flash('success_msg', 'you are registered to login')

    //console.log(name,email,password,password2,username);

    res.redirect('/users/login');
  }
})
Passport.passport();

router.post('/login',
  passport.authenticate('local',
    { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
  function (req, res) {
    res.redirect('/');
  });

//logout
router.get('/logout', function (req, res) {
  req.logout();

  req.flash('success_msg', 'You are logged out');

  res.redirect('/users/login');
})



module.exports = router;