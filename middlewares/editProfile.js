/*eslint-env node */
var Profile = require('../mongo_modules/profile.js');
module.exports = {
  editProfile : function(req,res,next) {
    Profile.findOne({'userid' : req.userid},function(err, profile) {
      if(err){
        req.reJson['message'] = 'something wrong when get data from database';
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        if(!profile){
          var newProfile = new Profile();
          newProfile.userid = req.userid;
          newProfile.fullname = req.body.fullname;
          newProfile.usertype = req.body.usertype;
          newProfile.email = req.body.email;
          newProfile.save(function(err,thisprofile) {
            req.reJson['profile'] = thisprofile;
            res.status(200).send(req.reJson);
          });
        }else {
          if(req.body.fullname != undefined){
            profile.firstname = req.body.fullname;
          }
          if(req.body.usertype != undefined){
            profile.usertype = req.body.usertype;
          }
          if(req.body.email != undefined){
            profile.email = req.body.email;
          }
          profile.save(function(err,thisprofile) {
            req.reJson['profile'] = thisprofile;
            res.status(200).send(req.reJson);
          });
        }
      }
    });
  }
}
