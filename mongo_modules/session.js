/*eslint-env node */
var mongoose = require('mongoose');

var SessionSchema = mongoose.Schema({
  userid : String,
  title : String,
  answer : String,
  activate : Boolean
});

module.exports = mongoose.model('Session', SessionSchema);
