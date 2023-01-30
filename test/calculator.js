// COMP 3133 - Full Stack Development II
// Lab Exercise - 02
//
// Julien Widmer - 101320111

const assert = require("assert");
const {add, sub, div, mul} = require("../app/calculator");

describe("Lab 2 - Calculator Test", function () {
    describe("Additions", function () {
        // Success
        it("5 + 6 = 11", function () {
            assert.equal(add(5, 6), 11);
        });

        // Failure
        it("5 + 6 != 7", function () {
            assert.notEqual(add(5, 6), 7);
        });
    });


    describe("Substractions", function () {
        // Success
        it("15 - 35 = -20", function () {
            assert.equal(sub(15, 35), -20);
        });

        // Failure
        it("15 - 35 != 35", function () {
            assert.notEqual(sub(15, 35), 35);
        });
    });


    describe("Divisions", function () {
        // Success
        it("18 / 5 = 3.6", function () {
            assert.equal(div(18, 5), 3.6);
        });

        // Failure
        it("18 / 5 != 1.3", function () {
            assert.notEqual(div(18, 5), 1.3);
        });
    });


    describe("Multiplications", function () {
        // Success
        it("6 * 4 = 24", function () {
            assert.equal(mul(6, 4), 24);
        });

        // Failure
        it("6 * 4 != 15", function () {
            assert.notEqual(mul(6, 4), 15);
        });
    });
});