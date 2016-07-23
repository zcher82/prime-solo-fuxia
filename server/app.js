var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var moment = require('moment');

var passport = require('./strategies/userStrategy');
var session = require('express-session');

// modules
var accounts = require('./routes/accounts');
var accents = require('./routes/accents');
var flowerdb = require('./routes/flowerdb');
var galleryinput = require('./routes/galleryinput');


// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// express routes
app.use('/accounts', accounts);
app.use('/accents', accents);
app.use('/flowerdb', flowerdb);
app.use('/galleryinput', galleryinput);


// mongoose connection

var databaseURI = '';

// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    databaseURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    databaseURI = 'mongodb://localhost:27017/fuxia';
}


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
