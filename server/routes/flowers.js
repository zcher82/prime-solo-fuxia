var express = require('express');
var router = express.Router();
var Flower = require('../models/flowerdb');

router.put('/', function (req, res) {
  var id = req.params.id;
  Flower.findById(id, function (err, flower) {
    console.log(flower);
    if (err) {
      res.sendStatus(500);
      return;
    }

  

});


module.exports = router;
