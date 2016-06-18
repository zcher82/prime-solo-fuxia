var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomerSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  event: { type: String, required: true },
  eventDate: Date,
  comments: { type: String, required: true },
});

var Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
