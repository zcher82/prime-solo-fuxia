var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  event: { type: String, required: true },
  eventDate: Date,
  comments: { type: String, required: false },
});

module.exports = mongoose.model('Account', AccountSchema);
