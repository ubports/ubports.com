delete require.cache[require.resolve("../bin/www")]
process.env.NODE_ENV = "development";
var www = require("../bin/www");
var request = require('request');
var expect = require('chai').expect;

var url = 'http://localhost:2700/';
var pages = ['', 'get-involved', 'developers', 'team', 'sponsors']


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
