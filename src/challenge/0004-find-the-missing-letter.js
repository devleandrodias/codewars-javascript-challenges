function findMissingLetter(array) {
  const charCodes = array.map((v) => v.charCodeAt(0));

  for (const [i, cv] of charCodes.entries()) {
    if (i < charCodes.length) {
      if (charCodes[i + 1] - cv !== 1) {
        return String.fromCharCode(cv + 1);
      }
    }
  }
}

function findMissingLetterSolution1(array) {
  let first = array[0].charCodeAt(0);

  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }

  throw new Error("Invalid input");
}

function findMissingLetterSolution2(array) {
  var i = array[0].charCodeAt();
  array.map((x) => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}

module.exports = {
  findMissingLetter,
  findMissingLetterSolution1,
  findMissingLetterSolution2,
};
