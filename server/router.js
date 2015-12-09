var makeToken = require('./middlewares/maketoken.js');
var middlewares = require('./middlewares/middlewares.js');
module.exports = function(app,passport){
  app.post('/register',function(req,res,next) {
    passport.authenticate('local-signup',function(err,user,info) {
      if(err){
        res.status(503).send(err);
      }else {
        if(user){
          makeToken.makeToken({'id' : user.id}).then(function(token) {
            res.status(200).send({'message' : 'OK',
                                  'Access_Token' : token});
            res.render('homepage.html', { message: req.flash('signupMessage') });
          }).catch(function(err) {
            console.log(err);
            res.status(500).send({'message' : 'Server err',
                                  'err' : err});
          });
        }else {
          res.status(409).send(info);
        }
      }
    })(req,res,next);
  });
  app.post('/local/login',function(req,res,next){
    passport.authenticate('local-login',function(err,user,info) {
      if(err){
        res.status(503).send(err);
      }else {
        if(user){
          makeToken.makeToken({'id' : user.id}).then(function(token) {
            res.status(200).send({'message' : 'OK',
                                  'Access_Token' : token});
          }).catch(function(err) {
            console.log(err);
            res.status(500).send({'message' : 'Server err',
                                  'err' : err});
          });
        }else {
          res.status(401).send(info);
        }
      }
    })(req,res,next);
  });
  app.post('/class' , middlewares.verifyToken , middlewares.postClass);
  app.get('/class' , middlewares.verifyToken , middlewares.getClass);
  // Get classes by date
  app.post('/classd' , middlewares.verifyToken, middlewares.getClassByDate);
  app.delete('/class/:classid' , middlewares.verifyToken , middlewares.checkClassid , middlewares.deleteClass);
  app.get('/class/:classid' , middlewares.verifyToken , middlewares.checkClassid ,middlewares.getClass);
  app.post('/class/:classid' , middlewares.verifyToken , middlewares.checkClassid ,middlewares.editClass);
  app.get('/profile' , middlewares.verifyToken , middlewares.getProfile);
  app.post('/profile' , middlewares.verifyToken , middlewares.editProfile);
  app.post('/findUser' , middlewares.verifyToken , middlewares.findUser);
  app.get('/getUserInformation/:userid' , middlewares.verifyToken ,middlewares.getUserInformation);
  //app.post('/resetPassword' , middlewares.resetPassword);
  app.post('/changePassword' , middlewares.verifyToken , middlewares.changePassword);
}
