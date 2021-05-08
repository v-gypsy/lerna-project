
const expect = require("chai").expect;

describe("Calendar module", function() {
    describe("Result equals 2", function() {
        it("Sum should be equals 2", function() {
            expect(1+1).to.equal(2);
        });
    });

    describe("Result equals hello world", function() {
        it("Result should be equals to hello world", function() {
            let text = "hello world";
            expect(text).to.equal("hello world");
        });
    });
});


describe("Edit profile module", function() {
    describe("Result equals 4", function() {
        it("Sum should be equals 4", function() {
            expect(2+2).to.equal(4);
        });
    });

    describe("Result equals hello", function() {
        it("Result should be equals to hello", function() {
            let text = "hello";
            expect(text).to.equal("hello");
        });
    });
});