
var Class = require('../mongo_modules/class.js');
module.exports = {
  editClass : function(req, res, next) {
    Class.findOne({'_id' : req.params.classid}, function(err, thisclass) {
      if(thisclass){
        if(req.userid === thisclass.userid){
          if(req.body.title != undefined){
            thisclass.title = req.body.title;
          }
          if(req.body.detail != undefined){
            thisclass.detail = req.body.detail;
          }
          if(req.body.classtime != undefined){
            thisclass.classtime = req.body.classtime;
          }
          if(req.body.activate != undefined){
            thisclass.activate = req.body.activate;
          }
          if(req.body.locationName != undefined){
            thisclass.locationName = req.body.locationName;
          }
          thisclass.save(function(err) {
            if(err){
              req.reJson['message'] = 'something wrong when put into database';
              req.reJson['err'] = err;
              res.status(500).send(req.reJson);
            }else {
              req.reJson['message'] = 'OK!';
              res.status(200).send(req.reJson);
            }
          });
        }else{
          req.reJson['message'] = 'You have no right to do this';
          res.status(403).send(req.reJson);
        }
      }else {
        req.reJson['message'] = 'No such class';
        res.status(404).send(req.reJson);
      }
    });
  }
}
