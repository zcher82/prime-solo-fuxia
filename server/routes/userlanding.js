var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');
var Customer = require('../models/customers');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('user.js get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    console.log('user.js logged in');
    res.send(req.user);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // res.sendFile(path.join(__dirname, '../public/views/index.html'));
    res.send(false);
  }
});
