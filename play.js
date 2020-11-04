// const net = require('net');
const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  });
};

setupInput();

