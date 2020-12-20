var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lean-Agile transformation services', homepage: true });
});

router.get('/course', function(req, res, next) {
  res.render('course', { title: 'Course Signup' });
});

module.exports = router;
