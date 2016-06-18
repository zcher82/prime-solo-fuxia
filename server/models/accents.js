var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccentSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

var Accent = mongoose.model('Accent', AccentSchema);

module.exports = Accent;
