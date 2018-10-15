var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');



module.exports = function(passport) {
 passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
  usertypeField :'usertype',
    usernameField: 'email',
   userField: 'username',
  uidField: 'uid',
  firstnameField: 'firstname',
  lastnameField: 'lastname',
    passwordField: 'password',
    passReqToCallback: true,
  },
  function(req,email,password, done) {
    process.nextTick(function() {
      User.findOne({ 'local.email':  email }, function(err, user) {
        if (err)
            return done(err);
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          var newUser = new User();
         newUser.local.usertype= req.body.usertype;
         newUser.local.email      = email;
         newUser.local.username   = req.body.username;
         newUser.local.firstname  = req.body.firstname;
         newUser.local.lastname   = req.body.lastname;
         newUser.local.uid        = req.body.uid;
         newUser.local.password   = newUser.generateHash(password);
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    usertypeField: 'usertype',
    passReqToCallback: true,
  },
  function(req, email, password, done,) {
  
    User.findOne({ 'local.email':  email }, function(err, user) {
      if (err)
          return done(err);
      if (!user)
          return done(null, false, req.flash('loginMessage', 'No user found.'));
      if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      return done(null, user);
    });
  }));

  

};
