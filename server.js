//Boiler Plate Code - Initializing and Requiring all Modules
//express setup
var express = require('express');
var app = express();
//Checks the environment port if not use 3000.
var PORT = process.env.PORT || 3000;
//Sequelize database setup
var Sequelize = require('sequelize');
var connection = new Sequelize('', '', '');
//requiring passport last
var passport = require('passport');
var passportLocal = require('passport-local');
//requiring bcrypt, hashes passwords
var bcrypt = require("bcryptjs");
//requiring bodyParser an initializing for use
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
//get css,js, or images from files in public folder
app.use(express.static(process.cwd() + '/public'));
//Initializing and requiring middleware express-session, enabaling cookies
app.use(require('express-session')({
  secret:'HELLO WORLD',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false, maxAge : (1000 * 60 * 60 * 2)},
}));
//Setting up and requring Handlebars
var exphb = require('express-handlebars');
app.engine('handlebars', exphb({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//Initializing passport.
app.use(passport.initialize());
app.use(passport.session());

/************* EXPRESS HANDLEBARS CODE START HERE *************/

app.get('/', function(req, res) {
  res.render('index', {msg: req.query.msg});
});












/************* EXPRESS HANDLEBARS CODE ENDS HERE *************/









//error handlers must go after exphb code
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//catch 404 and forward to error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// database connection via sequelize
connection.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on!!:" + PORT)
  });
});
