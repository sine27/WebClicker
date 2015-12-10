/*eslint-env node */
var Class = require('../mongo_modules/class.js');
module.exports = {
  deleteClass : function(req,res,next) {
    Class.findOne({'_id' : req.params.classid},function(err,thisclass) {
      if(thisclass){
        if(req.userid === thisclass.userid){
          thisclass.remove();
          req.reJson['message'] = 'OK!';
          res.status(200).send(req.reJson);
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
