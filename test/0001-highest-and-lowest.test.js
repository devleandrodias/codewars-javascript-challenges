const chai = require("chai");
const { highAndLow } = require("../src/challenge/0001-highest-and-lowest");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("[0001] - Highset and Lowest", () => {
  it("should return the highest and lowest number in the array", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
});
