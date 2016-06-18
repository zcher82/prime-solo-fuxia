var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImageSchema = new Schema({
  image: { type: String, required: true },
});

var Image = mongoose.model('Image', ImageSchema);

module.exports = Image;


// var FlowerSchema = new Schema({
//   name: { type: String, required: true},
//   description: { type: String, required: true },
//   symbolism: { type: String, required: true },
//   colorMeaning: { type: String, required: true },
//   image: { type: String, required: true},
// });
//
// var Flower = mongoose.model('Flower', FlowerSchema);
//
// module.exports = Flower;
//
//
//
// var GameSchema = new mongoose.Schema({
// _id: mongoose.Schema.Types.Mixed,
// players: [{
//   username: String,
//   currentRound: Number
// }],
// // the number represents the qNumber in the questionData.js
// // and also the round number for what the player is currently on
// questions: [Number]
// });
