/*eslint-env node */
var makeToken = require('./middlewares/maketoken.js');
var middlewares = require('./middlewares/middlewares.js');

module.exports = function(app,passport){
  app.post('/register',function(req,res,next) {
    passport.authenticate('local-signup',function(err,user,info) {
      if(err){
        //res.status(503).send(err);
        console.log(err);
        console.log(503);
      }else {
        if(user){
          makeToken.makeToken({'id' : user.id}).then(function(token) {
            //res.status(200).send({'message' : 'OK', 'Access_Token' : token});
            res.redirect('/homepage.html');
          }).catch(function(err) {
            console.log(err);
            console.log(500);
            //res.status(500).send({'message' : 'Server err', 'err' : err});
          });
        }else {
          res.status(409).send(info);
          console.log(409);
        }
      }
    })(req,res,next);
  });
  app.post('/local/login',function(req,res,next){
    passport.authenticate('local-login',function(err,user,info) {
      if(err){
        //res.status(503).send(err);
        console.log(err);
        console.log(503);
      }else {
        if(user){
          makeToken.makeToken({'id' : user.id}).then(function(token) {
            //res.status(200).send({'message' : 'OK', 'Access_Token' : token});
            res.redirect('/homepage.html');
            console.log("Token " + token);
          }).catch(function(err) {
            console.log(err);
            //res.status(500).send({'message' : 'Server err', serr' : err});
          });
        }else {
          res.status(401).send(info);
          console.log(401);
        }
      }
    })(req,res,next);
  });
  app.post('/class', middlewares.postClass);
  app.get('/class', middlewares.getClass);
  // Get classes by date
  app.post('/classd' , middlewares.getClassByDate);
  app.delete('/class/:classid', middlewares.checkClassid , middlewares.deleteClass);
  app.get('/class/:classid', middlewares.checkClassid ,middlewares.getClass);
  app.post('/class/:classid', middlewares.checkClassid ,middlewares.editClass);
  app.get('/profile', middlewares.getProfile);
  app.post('/profile', middlewares.editProfile);
  app.post('/findUser', middlewares.findUser);
  app.get('/getUserInformation/:userid',middlewares.getUserInformation);
  //app.post('/resetPassword' , middlewares.resetPassword);
  app.post('/changePassword', middlewares.changePassword);
};
