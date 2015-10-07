var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services');
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});



module.exports = router;
