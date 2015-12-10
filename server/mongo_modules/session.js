/*eslint-env node */
var mongoose = require('mongoose');

var SeesionSchema = mongoose.Schema({
  userid : String,
  title : String,
  answer : String,
  classtime : { type : Date, "default": Date.now },
  activate : Boolean
});

module.exports = mongoose.model('Session', ClassSchema);
