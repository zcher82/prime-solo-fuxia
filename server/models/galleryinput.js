var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArrangementSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
});

var Arrangement = mongoose.model('Arrangement', ArrangementSchema);

module.exports = Arrangement;
