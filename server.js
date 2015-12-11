/*eslint-env node */
var express = require('express');
var path = require('path');
var LocalStrategy = require('passport-local').Strategy;
var app = express();
//used to connected mongodb
var mongoose = require('mongoose');
//express middlewares
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('client-sessions');
//require main passport
var passport = require('passport');

var server = require('http').Server(app);
//connect to mongo db
var mongoURL = require('./mongo_modules/mongoURL.json').url;
mongoose.connect(mongoURL,function(err) {
  if(err) {
    console.log(err);
    process.exit();
  } else {
    console.log('Connect to mongodb');
  }
});

require('./passport/passport-local.js')(passport);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + './public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view options', { layout: false });

//use middlewares for every route
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({'cookieName' : 'session',
                 'secret' : 'i am a zombie, but i drink milk 0W0',
                 'duration' : 12 * 60 * 60 * 1000,
                 'activeDuration' : 5 * 60 * 1000}));
app.use(passport.initialize());
app.use(passport.session());

//var Account = require('./mongo_modules/user');

//give app and passport router
require('./router.js')(app,passport);
//listen on port
var port = app.get('port');
server.listen(port,function(err) {
  if(err) {
    console.log(err);
    process.exit();
  } else {
    console.log('Server is listening on ' + port);
  }
});
