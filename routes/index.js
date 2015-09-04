var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET deveopers page. */
router.get('/developers', function(req, res, next) {
  res.render('developers');
});

/* GET get-involved page. */
router.get('/get-involved', function(req, res, next) {
  res.render('get-involved');
});

/* GET get-involved page. */
router.get('/test', function(req, res, next) {
  res.send("test");
});



module.exports = router;
