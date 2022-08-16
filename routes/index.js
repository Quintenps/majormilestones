var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lean-Agile transformation services' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Course registration' });
});

module.exports = router;
