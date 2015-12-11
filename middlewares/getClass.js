/*eslint-env node */
var Class = require('../mongo_modules/class.js');
module.exports = {
  getAllClass : function(req,res,next) {
    Class.find().sort({'classtime' : -1})
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
  getClassByDate : function(req,res,next) {
    Class.find({'classtime' : {'$lt' : req.body.classtime}})
    .sort({'classtime' : -1})
    .exec(function(err,classes) {
      if(err){
        req.reJson['message'] = 'something wrong when get data from database';
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['message'] = 'OK! Classes list followed';
        req.reJson['Classes'] = classes;
        res.status(200).send(req.reJson);
      }
    });
  }
}
