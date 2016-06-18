var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var moment = require('moment');



// modules
var accounts = require('./routes/accounts');
var accents = require('./routes/accents');
var flowerdb = require('./routes/flowerdb');
var galleryinput = require('./routes/galleryinput');


// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express routes
app.use('/accounts', accounts);
app.use('/accents', accents);
app.use('/flowerdb', flowerdb);
app.use('/galleryinput', galleryinput);

// mongoose connection

var databaseURI = 'mongodb://localhost:27017/fuxia';

/*'mongodb://bhher:higginsher8082@ds035735.mlab.com:35735/heroku_2sw0ct69'*/


mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})

// start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
