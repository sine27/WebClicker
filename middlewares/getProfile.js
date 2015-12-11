/*eslint-env node */
var Profile = require('../mongo_modules/profile.js');
module.exports = {
  getProfile : function(req,res,next) {
    Profile.findOne({'userid' : req.userid},function(err,profile) {
      if(err){
        console.log("Fail! Profile load");
        res.status(500).send(req.reJson);
      }
      else {
        if(!profile){
          var newProfile = new Profile();
          newProfile.userid = req.userid;
          newProfile.firstname = null;
          newProfile.lastname = null;
          newProfile.usertype = null;
          newProfile.email = null;
          newProfile.save(function(err,thisprofile) {
            console.log("Success! Profile load");
            console.log(thisprofile);
            req.reJson['profile'] = thisprofile;
            res.status(200).send(req.reJson);
          });
        }else {
          console.log("Success! Profile load");
          console.log(profile);
          req.reJson['profile'] = profile;
          res.status(200).send(req.reJson);
        }
      }
    });
  }
}
