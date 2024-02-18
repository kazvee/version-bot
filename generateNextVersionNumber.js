const readline = require('readline');

const generateNextVersionNumber = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter the current software version: ', (answer) => {
  const currentSoftwareVersion = answer.trim();
  rl.close();

  console.log(
    `The next software version number is: ${generateNextVersionNumber(
      currentSoftwareVersion
    )}`
  );
});
