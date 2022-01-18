function friend(friends) {
  return friends.filter((x) => x.length === 4);
}

const friendSolution1 = (friends) => friends.filter((x) => x.length === 4);

module.exports = { friend, friendSolution1 };
