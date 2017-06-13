var express = require('express');
var router = express.Router();
var sponsorsData = require("../../data/sponsors.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET deveopers page. */
router.get('/team', function(req, res, next) {
  res.render('team');
});
router.get('/developers', function(req, res, next) {
  res.redirect("/team");
});

/* GET get-involved page. */
router.get('/get-involved', function(req, res, next) {
  res.render('get-involved');
});

router.get('/installer', function(req, res, next) {
  res.render('installer');
});

/* GET sponsors page. */
router.get('/sponsors', function(req, res, next) {
  res.render('sponsors', {
    sponsorsData: sponsorsData
  });
});

/* GET faq page. */
router.get('/faq', function(req, res, next) {
  res.render('faq');
});

router.get('/telegram', function(req, res, next) {
  res.redirect("https://telegram.me/ubports");
});

module.exports = router;
