/*eslint-env node */
var mongoose = require('mongoose');

var ClassSchema = mongoose.Schema({
  userid : String,
  title : String,
  detail : String,
  classtime : { type : Date, "default": Date.now },
  activate : Boolean,
});

module.exports = mongoose.model('Class', ClassSchema);
