/*eslint-env node */
var mongoose = require('mongoose');

var enrolledUserSchema = mongoose.Schema({
	classid : String,
  	userid : String,
  	userfullname : String,
  	email : String
});

module.exports = mongoose.model('enrolledUser', enrolledUserSchema);
