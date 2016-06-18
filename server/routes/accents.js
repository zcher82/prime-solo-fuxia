var express = require('express');
var router = express.Router();
var Accent = require('../models/accents');
var Green = require('../models/greens');


//get floral accents
router.get('/', function (req, res) {
  Accent.find({}, function (err, accents) {
    // console.log(flowers);
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (accents);
  });
});


//get greens
router.get('/green', function (req, res) {
  Green.find({}, function (err, greens) {
    // console.log(flowers);
    if (err) {
      res.sendStatus(500);
      return;
    }
      res.send (greens);
  });
});



module.exports = router;
