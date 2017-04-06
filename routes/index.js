var express = require('express');
var router = express.Router();

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

/* GET sponsors page. */
router.get('/sponsors', function(req, res, next) {
  res.render('sponsors');
});

router.get('/telegram', function(req, res, next) {
  res.redirect("https://t.me/joinchat/AAAAAAASEHGRGL5NNb2QAQ");
})

module.exports = router;
