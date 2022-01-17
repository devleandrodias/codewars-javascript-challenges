const { argv } = require("process");
const { resolve } = require("path");
const { readdirSync } = require("fs");
const { exec } = require("child_process");

const paths = readdirSync(resolve(__dirname, "exec"), (err) => {
  if (err) console.error(err);
});

const fileName = paths.find((x) => x.startsWith(argv[2]));

const cwd = `node src/exec/${fileName}`;

exec(cwd, (err, stdout) => {
  if (err) throw new Error(err);

  console.log(stdout);
});
