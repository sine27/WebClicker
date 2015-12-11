/*eslint-env node */
/*globals thisclass:true */
var enrollClass = require('../mongo_modules/enrolledUser.js');
module.exports = {
  postClass : function(req,res,next) {
    var newUser = new enrollClass();
    newUser.userid = req.userid;
    newUser.classid = req.body.classid;
    newUser.userfullname = req.body.fullname;
    newUser.email = req.body.email;
    newUser.save(function(err,s) {
      if(err){
        res.status(500).send(req.reJson);
        console.log("500 Enroll Class Failed");
      }else {
        //res.status(200).send(req.reJson);
        console.log("200 Enroll Class Successful");
      }
    });

  }
}