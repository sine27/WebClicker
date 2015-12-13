/*eslint-env node */
var Class = require('../mongo_modules/class.js');
module.exports = {
  getClassByUser : function(req,res,next) {
    Class.find({'userid' : req.userid}).sort({'classtime' : -1})
    .exec(function(err,classes) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['Classes'] = classes;
        res.status(200).send(req.reJson);
      }
    });
  },
  getClass : function(req, res, next) {
    Event.findOne({'_id' : req.params.classid}, function(err, thisclass) {
      if(err){
        req.reJson['message'] = 'something wrong when get data from database';
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else{
        if(thisclass){
          if(req.userid === thisclass.userid){
            req.reJson['message'] = 'OK! Class followed';
            req.reJson['class'] = thisevent;
            res.status(200).send(req.reJson);
          } else {
            req.reJson['message'] = 'You have no right to do this';
            res.status(403).send(req.reJson);
          }
        }else {
          req.reJson['message'] = 'OK! Class followed';
          req.reJson['class'] = thisevent;
          res.status(200).send(req.reJson);
        }
      }
    });
  }
}
