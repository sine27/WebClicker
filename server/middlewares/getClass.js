/*eslint-env node */
var Class = require('../mongo_modules/class.js');
module.exports = {
  getAllClass : function(req,res,next) {
    console.log("hhhhhhhhhhere");
    Class.find().sort({'classtime' : -1})
    .exec(function(err, classes) {
      if(err){
        console.log("fffffffuck");
        req.reJson['message'] = 'something wrong when get data from database';
        req.reJson['err'] = err;
        //res.status(500).send(req.reJson);
      }else {
        req.reJson['message'] = 'OK! Classes list followed';
        req.reJson['Classes'] = classes;
        //res.status(200).send(req.reJson);
        console.log("ddddddone");
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
