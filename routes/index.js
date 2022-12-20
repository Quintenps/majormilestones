var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lean-Agile transformation services' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact information' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Course registration' });
});

module.exports = router;
