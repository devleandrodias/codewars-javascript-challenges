const chai = require("chai");
const assert = chai.assert;
const { createPhoneNumber } = require("../src/0002-create-phone-number");

describe("[0002] - Create phone number", () => {
  it("should return a phone number following the pattern with the numbers inside the array", () => {
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
    assert.strictEqual(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      "(111) 111-1111"
    );
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
  });
});
