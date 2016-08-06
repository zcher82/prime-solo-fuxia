var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');
var Flower = require('../models/flowerdb');

//adding a flower into customer's basket
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var userId = req.body._id;
  console.log(userId);

  User.findById(userId, function (err, user) {
    Flower.findById(id, function (err, flower) {
      console.log(flower);
      if (err) {
        res.sendStatus(500);
        return;
      }

      user.basket.push(flower);
      user.save(function (err) {
        console.log(user);
        if (err) {
          res.sendStatus(500);
          return;
        }
        res.sendStatus(204);
      });
    });
  });

});


module.exports = router;
