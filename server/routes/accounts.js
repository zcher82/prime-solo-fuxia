var express = require('express');
var router = express.Router();
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


//GET -- all the customers to add to the DOM
router.get('/', function (req, res) {
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
