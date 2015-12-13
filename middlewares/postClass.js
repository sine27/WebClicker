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
    newClass.save(function(err) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
        console.log("500 Create Class Failed");
      }else {
        //res.status(200).send(req.reJson);
        console.log("200 Create Class Successful");
        res.redirect('/homepage.html');
      }
    });
  }
}