var expect = require("chai").expect;
var request = require("request");

describe("Shoping with sql API", function () {

    describe("items", function () {

        var url = "http://localhost:3000/api/items";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns status 200", function (done) {
            request("http://localhost:3000/api/items/1", function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });


    });

    describe("categories", function () {
        var url = "http://localhost:3000/api/categories";

        it("returns status 200", function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns data", function (done) {
            request("http://localhost:3000/api/categories/1", function (error, response, body) {
                expect(body).to.equal('{"response":{"id":1,"name":"sdfsdfdfsdf"}}');
                done();
            });
        });

    });


});


