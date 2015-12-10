/*eslint-env node */
/*globals thisclass:true */
var Class = require('../mongo_modules/class.js');
module.exports = {
  postClass : function(req,res,next) {
    var newClass = new Class();
    newClass.userid = req.userid;
    newClass.title = req.body.title;
    newClass.detail = req.body.detail;
    newClass.classtime = req.body.classtime;
    newClass.activate = req.body.activate;
    newClass.save(function(err,s) {
      if(err){
        req.reJson['message'] = 'something wrong when put into database';
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        req.reJson['message'] = 'OK!';
        req.reJson['class'] = thisclass;
        res.status(200).send(req.reJson);
      }
    });

  }
}