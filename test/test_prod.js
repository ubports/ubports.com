delete require.cache[require.resolve("../bin/www")]
delete require.cache[require.resolve("../app.js")]
delete require.cache[require.resolve("../src/routes/index.js")]
process.env.NODE_ENV = "production";
process.env.PORT = 2701
var www = require("../bin/www");
var request = require('request');
var expect = require('chai').expect;

var url = 'http://localhost:2701/';
var pages = ['', 'get-involved', 'developers', 'team', 'sponsors', 'faq']

describe("testing "+process.env.NODE_ENV, function () {
  pages.forEach(function (page) {
    describe("testing: "+url+page, function () {
      it('should return 200', function (done) {
        request.get(url+page, function (err, res, body){
          expect(res.statusCode).to.equal(200);
          done();
        });
      });
      it('should return 404', function (done) {
        request.post(url+page, function (err, res, body){
          expect(res.statusCode).to.equal(404);
          done();
        });
      });
    });
  });
});
