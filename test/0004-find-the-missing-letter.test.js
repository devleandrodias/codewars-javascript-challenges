const {
  findMissingLetter,
} = require("../src/challenge/0004-find-the-missing-letter");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("KataTests", () => {
  it("exampleTests", () => {
    assert.assertEquals(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
    assert.assertEquals(findMissingLetter(["O", "Q", "R", "S"]), "P");
  });
});
