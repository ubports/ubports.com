var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET deveopers page. */
router.get('/deveopers', function(req, res, next) {
  res.render('deveopers');
});

/* GET get-involved page. */
router.get('/get-involved', function(req, res, next) {
  res.render('get-involved');
});

module.exports = router;
