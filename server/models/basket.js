var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BasketSchema = new Schema({
  item: {type: String, required: false},
  quantity: {type: Number, required: false}
});

module.exports = mongoose.model('Basket', BasketSchema);
