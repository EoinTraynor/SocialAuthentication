module.exports = function(app, passport) {

	// HOME PAGE
	app.get('/', isLoggedOut, function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	
	// PROFILE SECTION =========================	
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
	});

	// LOGOUT ==============================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

  // LOCAL LOGIN =========================  
  app.get('/login', isLoggedOut, function(req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true 
  }));

  // LOCAL SIGNUP ========================
  app.get('/signup', isLoggedOut, function(req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash : true
  }));

	// FACEBOOK ROUGHTS ====================
	app.get('/auth/facebook', isLoggedOut, passport.authenticate('facebook', { scope : 'email' }));
    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
      }));

    // TWITTER ROUTES ======================
    // route for twitter authentication and login
    app.get('/auth/twitter', isLoggedOut, passport.authenticate('twitter', { scope : 'email' }));
    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
      passport.authenticate('twitter', {
        successRedirect : '/profile',
        failureRedirect : '/'
      }));

    // GOOGLE ROUTES ======================
    app.get('/auth/google', isLoggedOut, passport.authenticate('google', { scope : ['profile', 'email'] }));
    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
      }));
}

// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.redirect('/');
}

function isLoggedOut(req, res, next) {
  // if user is authenticated in the session, carry on
  if (!req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
    res.redirect('/profile');
}
