const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const { friend } = require("../src/challenge/0003-friend-or-foe");

describe("[0003] - Friend or foe", () => {
  it("should return an array with names that are four characters", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), [
      "Ryan",
    ]);
    assert.deepEqual(
      friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
      ["Jimm", "Cari", "aret"]
    );
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), [
      "Love",
      "Your",
      "Face",
    ]);
  });
});
