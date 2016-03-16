var www = require("../bin/www");
var request = require('request');
var expect = require('chai').expect;

var url = 'http://localhost:2700/';
var pages = ['', 'get-involved', 'developers']

pages.forEach(function (page) {
  describe("testing: "+url+page, function () {
    it('should return 200', function (done) {
      request.get(url+page, function (err, res, body){
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  })
})
