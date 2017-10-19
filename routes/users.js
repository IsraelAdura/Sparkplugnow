var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var multer = require('multer')

//custom modules
var User = require('../models/users');
var Passport = require('./passport');


var image = require('./image');
image.multer
var upload = image.upload


//signup
router.get('/register', function (req, res) {
  res.render('register');
});

//get login
router.get('/login', function (req, res) {
  res.render('login');
  //console.log(req);
});

//post signup information
router.post('/register',upload.any(), function (req, res) {

  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var mobile = req.body.mobile;
  var password = req.body.password;
  var password2 = req.body.password2;
  var mobile = req.body.mobile;
  var about = req.body.about;
  var skills = req.body.skills;
  var github = req.body.github;
  var twitter = req.body.twitter;
  var website = req.body.website;
  var codepen = req.body.codepen;
  var address = req.body.address;
  var picture = req.files.picture;

  //req.body validation
  req.checkBody('name', 'name is required').notEmpty();
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('email', 'email is required').notEmpty();
  req.checkBody('email', 'enter valid email eg. mail@mail.com').isEmail();
  req.checkBody('password', 'password is required').notEmpty();
  req.checkBody('password', 'passwords must be at least 5 characters long and contain one number').isLength({ min: 4 });
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  //req.checkBody('mobile', 'Enter your mobile Number').notEmpty()
  //req.checkBody('number', 'Enter a valid  mobile Number').isNumber()
  // req.checkBody('github', 'Enter your github account link').isEmpty();

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
      mobile: mobile,
      address: address,
      about: about,
      skills: skills,
      github: github,
      twitter: twitter,
      codepen: codepen,
      website: website,
      picture: {
        originalname: req.files[0].originalname
      }

    })
    User.createUser(newUser, function (err, user) {
      if (err) { throw err };
      console.log(user);
    });
    req.flash('success_msg', 'you are registered to login');

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