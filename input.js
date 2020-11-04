// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(connection);
  return stdin;
};

/**
 * Captures User Input and handles the stdin.on event with data and key
 */

const handleUserInput = function() {
  process.stdin.on('data', (key) => {

    switch (key) {

    case 'w':
    case 'W':
    case '\u001b[A':
      connection.write('Move: up');
      break;
    
    case 'a':
    case 'A':
    case '\u001b[C':
      connection.write('Move: right');
      break;

    case 's':
    case 'S':
    case '\u001b[B':
      connection.write('Move: down');
      break;

    case 'd':
    case 'D':
    case '\u001b[D':
      connection.write('Move: left');
      break;
    
    case 'x':
    case 'X':
      connection.write('Say: Huuuungry!!!');
      break;
        
    case 'z':
    case 'Z':
      connection.write('Say: I am the SNAKE');
      break;
            
    case '\u0003':
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  });
};


module.exports = { setupInput };