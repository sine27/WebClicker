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
  }
}
