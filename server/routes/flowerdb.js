var express = require('express');
var router = express.Router();
var Flower = require('../models/flowerdb');

//update images in DB
router.put('/:id/images', function (req, res) {
  var id = req.params.id;
  var image = req.body;
  Flower.findById(id, function (err, flower) {
    console.log(flower);
    if (err) {
      res.sendStatus(500);
      return;
    }

    flower.images.push(image);
    flower.save(function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.sendStatus(204);
    });
  });
});



router.post('/', function (req, res) {
  var flowers = new Flower(req.body);
  flowers.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});



//GET -- all the flowers to add to the DOM
router.get('/', function (req, res) {
  Flower.find({}, function (err, flowers) {
    // console.log(flowers);
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (flowers);
  });
});


//DELETE -- flower by ID from the DOM / flower DB
router.delete('/:id', function (req, res) {
  console.log(req.params.id);
  Flower.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.sendStatus(204);
  });
});




module.exports = router;
