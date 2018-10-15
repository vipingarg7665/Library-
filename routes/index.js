var express = require('express');
var passport = require('passport');
var router = express.Router();
var ct = require('./controllers/main');
var mutler=require('multer')



var storage = mutler.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads') //Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //File name after saving
    }
  })
  
  var upload = mutler({ storage: storage })
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/bringo/login', function(req, res, next) {
  res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/bringo/signup', function(req, res) {
  res.render('signup.ejs', { message: req.flash('signupMessage') });
});

router.get('/bringo/user/profile', isLoggedIn, function(req, res) {
  res.render('user.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/bringo/signup', passport.authenticate('local-signup',{
  successRedirect: '/bringo/user/student',
  failureRedirect: '/bringo/signup',
  failureFlash: true,
}));

router.post('/bringo/login', passport.authenticate('local-login', {
  successRedirect: '/bringo/user/student',
  failureRedirect: '/bringo/login',
  failureFlash: true,
}));


router.get('/bringo/user',ct.usertype);
router.get('/bringo/libraryrecord',ct.record);
router.get('/bringo/forgetpassword',ct.forget); 
//user parts
router.get('/bringo/user/admin',ct.admin);
router.get('/bringo/user/teacher',ct.teacher);
router.get('/bringo/user/student',ct.student);
router.get('/bringo/user/library',ct.library_staff);
router.get('/bringo/user/alumnistudent',ct.alumni);
//issue & feedback
router.get('/bringo/user/student/feedback',ct.formpage);
router.get('/bringo/user/student/issuebook',ct.frontpage);
router.get('/bringo/user/teacher/feedback',ct.formpage1);
router.get('/bringo/user/teacher/issuebook',ct.frontpage1);
router.get('/bringo/user/teacher/uploadnotes',ct.upload1);
router.get('/bringo/user/student/uploadnotes',ct.upload);
router.get('/bringo/user/student/downloadnotes',ct.upload);
router.get('/bringo/user/student/bookstatus',ct.user);
router.get('/bringo/user/teacher/bookstatus',ct.userTeacher);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}
