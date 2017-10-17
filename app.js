//Modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var session = require('express-session');
var expressValidator = require('express-validator');
var exphbs = require('express-handlebars');
var logger = require('morgan');
var passport = require('passport');
var LocalStategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var formidable=require('formidable')
var credentials = require('./credentials.js');


var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');


//database connection
var options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};

mongoose.connect('mongodb://localhost/sparkplugnow');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log(err);
});

db.once('open', function () {
  console.log('handshake established')
});

//to use eventually- database


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');



// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user',express.static(path.join(__dirname, 'public')))

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    const namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));


// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);


app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//handle server error (500)
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
  
})
//set port
app.set('port', (process.env.PORT) || 8080);

//listen to port
app.listen(app.get('port'), function () {
  console.log('listening @ 8080')
})

module.exports = app;
