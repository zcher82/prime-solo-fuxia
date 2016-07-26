var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');
var Customer = require('../models/customers');


router.post('/', function (req, res) {
  var customers = new Customer(req.body);
  customers.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});


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


//GET -- all the customers to add to the DOM
router.get('/customers', function (req, res) {
  Customer.find({}, function (err, customers) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (customers);
  });
});


//DELETE -- flower by ID from the DOM / flower DB
router.delete('/:id', function (req, res) {
  console.log(req.params.id);
  Customer.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.sendStatus(204);
  });
});

module.exports = router;
