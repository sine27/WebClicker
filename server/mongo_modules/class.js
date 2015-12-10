/*eslint-env node */
var mongoose = require('mongoose');

var ClassSchema = mongoose.Schema({
  userid : String,
  title : String,
  detail : String,
  classtime : { type : Date, "default": Date.now },
});

module.exports = mongoose.model('Class', ClassSchema);
