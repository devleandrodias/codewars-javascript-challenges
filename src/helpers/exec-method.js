function execMethod(title, result) {
  console.clear();

  console.time(title);
  console.log("\nOutput:", result);
  console.timeEnd(title);
}

module.exports = { execMethod };
