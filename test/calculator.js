// COMP 3133 - Full Stack Development II
// Lab Exercise - 02
//
// Julien Widmer - 101320111

var assert = require("assert");

describe("Lab 2 - Calculator Test", function () {
    describe("Additions", function () {
        // Success
        it("5 + 6 = 11", function () {
            assert.equal(5 + 6, 11);
        });

        // Failure
        it("5 + 6 != 7", function () {
            assert.notEqual(5 + 6, 7);
        });
    });


    describe("Substractions", function () {
        // Success
        it("15 - 35 = -20", function () {
            assert.equal(15 - 35, -20);
        });

        // Failure
        it("15 - 35 != 35", function () {
            assert.notEqual(15 - 35, 35);
        });
    });


    describe("Divisions", function () {
        // Success
        it("18 / 5 = 3.6", function () {
            assert.equal(18 / 5, 3.6);
        });

        // Failure
        it("18 / 5 != 1.3", function () {
            assert.notEqual(18 / 5, 1.3);
        });
    });


    describe("Multiplications", function () {
        // Success
        it("6 * 4 = 24", function () {
            assert.equal(6 * 4, 24);
        });

        // Failure
        it("6 * 4 != 15", function () {
            assert.notEqual(6 * 4, 15);
        });
    });
});