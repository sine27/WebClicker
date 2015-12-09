var Class = require('../mongo_modules/class.js');
module.exports = {
  getAllClass : function(req,res,next) {
    Class.find({'userid' : req.userid}).sort({'classtime' : -1})
    .exec(function(err, classes) {
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
  },
  getClassByDate : function(req,res,next) {
    Class.find({'userid' : req.userid ,
                'classtime' : {'$lt' : req.body.classtime}})
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
