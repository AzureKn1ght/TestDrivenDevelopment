var question1 = require("../app/question1");
var question2 = require("../app/question2");
import { expect } from "chai";

// Test 1 to test the outputs of the first script
describe("Test 1", function () {
  describe("Subtitle", function () {
    it("description text", function () {
      let testCase1 = question1.funcName("inputs");
      let testCase2 = question1.funcName("inputs");
      let testCase3 = question1.funcName("inputs");

      expect(testCase1).to.equal("output");
      expect(testCase2).to.equal("output");
      expect(testCase3).to.equal("output");
    });
  });
});

// Test 2 to test the outputs of the second script
describe("Test 2", function () {
  describe("Subtitle", function () {
    it("description text", function () {
      let testCase1 = question2.funcName("inputs");
      let testCase2 = question2.funcName("inputs");
      let testCase3 = question2.funcName("inputs");

      expect(testCase1).to.deep.equal([0, 0, 0]);
      expect(testCase2).to.deep.equal([0, 0, 0]);
      expect(testCase3).to.deep.equal([0, 0, 0]);

      /*Used the deep.equal because we were comparing two nested objects. The .deep part tells Chai to match all the elements of the arrays, one by one.*/
    });
  });
});
