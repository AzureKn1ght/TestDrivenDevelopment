import { expect } from "chai";
import { nthPrimeNumber } from "../app/prime10001.js";
import { sumOfMultiples } from "../app/sumOfMultiples.js";

// Test 1 to test the outputs of prime10001.js
describe("Test 1", function () {
  describe("Problem 7", function () {
    it("What is the 10001st prime number", function () {
      let testCase1 = nthPrimeNumber(6);
      let testCase2 = nthPrimeNumber(10001);
      let testCase3 = nthPrimeNumber(-1);

      expect(testCase1).to.equal(13);
      expect(testCase2).to.equal(104743);
      expect(testCase3).to.equal(null);
    });
  });
});

// Test 2 to test the outputs of the second script
describe("Test 2", function () {
  describe("Problem 1", function () {
    it("Find the sum of all the multiples of 3 or 5 below 1000", function () {
      let testCase1 = sumOfMultiples(10, 3, 5);
      let testCase2 = sumOfMultiples(1000, 3, 5);
      let testCase3 = sumOfMultiples(-1, -1, -1);

      expect(testCase1).to.equal(23);
      expect(testCase2).to.equal(233168);
      expect(testCase3).to.equal(null);
    });
  });
});
