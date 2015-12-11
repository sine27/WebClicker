/*eslint-env node */
var EnrolledUser = require('../mongo_modules/enrolledUser.js');
module.exports = {
  getEnrolledClass : function(req,res,next) {
    EnrolledUser.find({'userid' : req.userid}).sort({'classtime' : -1})
    .exec(function(err, classes) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['Classes'] = classes;
        res.status(200).send(req.reJson);
      }
    });
  },
  getEnrolledUser : function(req,res,next) {
    EnrolledUser.find({'classid' : req.classid}).sort({'userfullname' : -1})
    .exec(function(err, users) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['Classes'] = users;
        res.status(200).send(req.reJson);
      }
    });
  }
}