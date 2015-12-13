/*eslint-env node */
var EnrolledUser = require('../mongo_modules/enrolledUser.js');
module.exports = {
  getEnrolledUser : function(req,res,next) {
    EnrolledUser.find({'classid' : req.classid}).sort({'userfullname' : -1})
    .exec(function(err, users) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['Users'] = users;
        res.status(200).send(req.reJson);
      }
    });
  }
}