/*eslint-env node */
var makeToken = require('./middlewares/maketoken.js');
var middlewares = require('./middlewares/middlewares.js');

module.exports = function(app,passport){
  app.get('/allclass', function(req,res,next) {
    var Class = require('./mongo_modules/class.js');
    Class.find().sort({'classtime' : -1})
    .exec(function(err, classes) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
      }else {
        //console.log(classes);
        req.reJson = {};
        req.reJson['Classes'] = classes;
        res.status(200).send(req.reJson);
      }
    });
  });
  app.get('/allclass/:classid', function(req, res, next) {
    var Class = require('./mongo_modules/class.js');
    Class.findOne({'_id' : req.params.classid}, function(err, thisclass) {
      if(err){
        req.reJson['err'] = err;
        res.status(500).send(req.reJson);
        console.log("500");
      }else{
        req.reJson = {};
        req.reJson['class'] = thisclass;
        res.status(200).send(req.reJson);
      }
    });
  });
  app.post('/register',function(req,res,next) {
    passport.authenticate('local-signup',function(err,user,info) {
      if(err){
        res.status(503).send(err);
        console.log(err);
        console.log(503);
      }else {
        if(user){
          makeToken.makeToken({'id' : user.id}).then(function(token) {
            console.log("Token " + token);
            res.status(200).send({'Token' : token});
          }).catch(function(err) {
            console.log(err);
            console.log(500);
            res.status(500).send({'message' : 'Server err', 'err' : err});
          });
        }else {
          res.status(409).send(err);
          console.log(user);
          console.log(409);
        }
      }
    })(req,res,next);
  });
  app.post('/local/login',function(req,res,next){
    passport.authenticate('local-login',function(err,user,info) {
      if(err){
        res.status(503).send(err);
        console.log(err);
        console.log(503);
      }else {
        if(user){
          makeToken.makeToken({'id' : user.id}).then(function(token) {
            console.log("Token " + token);
            res.status(200).send({'Token' : token});
          }).catch(function(err) {
            console.log(err);
            res.status(500).send({'message' : 'Server err', 'err' : err});
          });
        }else {
          res.status(401).send({'message' :  "wrong pw or username"});
          console.log(401);
        }
      }
    })(req,res,next);
  });
  app.post('/class', middlewares.verifyToken, middlewares.postClass);
  app.get('/class', middlewares.verifyToken,  middlewares.getClass);
  //app.get('/allclass', middlewares.getAllClass);
  // Get classes by date
  //app.post('/enrolleduser' , middlewares.getEnrolledUser);
  app.delete('/class/:classid', middlewares.verifyToken,  middlewares.checkClassid , middlewares.deleteClass);
  //app.get('/class/:classid', middlewares.verifyToken,  middlewares.checkClassid ,middlewares.getClass);
  app.post('/class/:classid', middlewares.verifyToken, middlewares.checkClassid ,middlewares.editClass);
  app.get('/profile', middlewares.verifyToken, middlewares.getProfile);
  app.post('/profile',  middlewares.verifyToken, middlewares.editProfile);
  app.post('/findUser', middlewares.findUser);
  app.get('/getUserInformation/:userid',middlewares.getUserInformation);
  //app.post('/resetPassword' , middlewares.resetPassword);
  app.post('/changePassword', middlewares.changePassword);
};
