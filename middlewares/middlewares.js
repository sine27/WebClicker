/*eslint-env node */
var makeToken = require('./maketoken.js');
var thisPostClass = require('./postClass.js').postClass;
var thisdeleteClass = require('./deleteClass.js').deleteClass;
//var thisgetAllClass = require('./getAllClass.js').getAllClass;
var thisgetEnrolledClass = require('./getClass.js').getClassByUser;
var thisGetClassByDate = require('./getClass.js').getClassByDate;
var thiseditClass = require('./editClass.js').editClass;
var thisgetProfile = require('./getProfile.js').getProfile;
var thiseditProfile = require('./editProfile.js').editProfile;
var thischeckClassid = require('./checkClassid.js').checkClassid;
var thisfindUser = require('./findUser.js').findUser;
var getUserInformation = require('./getUserInformation.js').getUserInformation;

var changePassword = require('./changePassword.js').changePassword;

module.exports = {
  verifyToken : function(req,res,next) {
    //console.log(req.cookies.Access_Token);
    if(req.cookies.Access_Token === undefined){
      res.status(401).send({"message" : "need Token"});
    }else {
      makeToken.checkToken(req.cookies.Access_Token).then(function(result) {
        req.userid = result.id;
        req.reJson = {};
        return next();
      }).catch(function(err) {
        console.log(err);
        res.status(401).send({"message" : "bad token"});
      });
    }
  },
  postClass : thisPostClass,
  deleteClass : thisdeleteClass,
  //getAllClass : thisgetAllClass,
  getClass : thisgetEnrolledClass,
  editClass : thiseditClass,
  getProfile : thisgetProfile,
  editProfile : thiseditProfile,
  checkClassid : thischeckClassid,
  findUser : thisfindUser,
  getUserInformation : getUserInformation,
  changePassword : changePassword,
  getClassByDate : thisGetClassByDate
}
