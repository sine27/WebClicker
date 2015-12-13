// class & student relationship
// find enrolled class of a user by find userid
// find enrolled member of a class by find classid
// get classes as class holder : use getClass

var enrolllist = require('../mongo_modules/enrolllist.js');
module.exports = {
  enrollment : function(req,res,next) {
    var newEnrollment = new enrolllist();
    newEnrollment.classid = req.body.classid;
    newEnrollment.userid = req.body.userid;
    newEnrollment.save(function(err) {
      if(err){
        req.reJson['message'] = 'something wrong when put into database';
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['message'] = 'OK!';
        res.status(200).send(req.reJson);
      }
    });
  }
}
