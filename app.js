// set up ======================================================================
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var dbConfig = 'mongodb://localhost/test'

// configuration ===============================================================
mongoose.connect(dbConfig);

require('./config/passport')(passport);

app.configure(function() {

	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('view engine', 'ejs');

	// required for passport
	app.use(express.session({ secret: 'authsecret' }));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

});

// routes ======================================================================
require('./app/routes.js')(app, passport);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
