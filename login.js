var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var assert = require('assert');


// database config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/university');
                 //,{useMongoClient: true});

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//  $(document).ready(function(){
//      $('#logInButton').on('click',logIn)
//  });

  // configure sessions
  app.use(session({
    genid: function(request) {
      return uuid();
    },
    resave: false,
    saveUninitialized: false,
    //cookie: {secure: true},
    secret: 'apollo slackware prepositional expectations'
  }));

//function logIn() {

  //if ( $("#studentID").val() == "100523538" && $("#password").val() == "110295"){
  //console.log("Login Successful");
  //window.location = "success.html"; // Redirecting to other page.
  //}
//}

app.get('/', function(request, response){
    response.sendfile('login.html');
});

app.listen(3001, function() {
  console.log('Listening on port 3001');



});
