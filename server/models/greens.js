var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GreenSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

var Green = mongoose.model('Green', GreenSchema);

module.exports = Green;
