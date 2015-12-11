/*eslint-env node */
var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
  userid : String,
  usertype : String,
  fullname : String,
  email : String
});

module.exports = mongoose.model('Profile', profileSchema);
