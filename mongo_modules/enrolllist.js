var mongoose = require('mongoose');


var enrolllistSchema = mongoose.Schema({
  classid : String,
  userid : String
});

module.exports = mongoose.model('Enrolllist', enrolllistSchema);
