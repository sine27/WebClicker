/*eslint-env node */
module.exports = {
  checkClassid : function(req,res,next) {
    if(req.params.classid === null){
      req.reJson['message']='need classid';
      res.status(404).send(req.reJson);
    }else {
      return next();
    }
  }
}
