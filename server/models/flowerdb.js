var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = require('./image').schema;


var FlowerSchema = new Schema({
  name: { type: String, required: true},
  description: { type: String, required: true },
  symbolism: { type: String, required: false },
  colorMeaning: { type: String, required: false },
  images: [ImageSchema],
});

var Flower = mongoose.model('Flower', FlowerSchema);

module.exports = Flower;
