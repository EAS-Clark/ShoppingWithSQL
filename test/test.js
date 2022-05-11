var expect  = require("chai").expect;
var request = require("request");

describe("Shoping with sql API", function() {

  describe("items", function() {

    var url = "http://localhost:3000/api/items";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });


  });

  describe("Hex to RGB conversion", function() {
    var url = "http://localhost:3000/api/categories";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });




  });

});