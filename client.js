/**
 * Establishes connection with the game server
 */

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // initialize player name
  conn.on('connect', () => {
    conn.write('Name: RRS');
  });
  
  //EXPERIMENTING WITH TIMEOUTS AND INTERVALS

  // conn.on('connect', () => {
  //   for (let i = 0; i < 10; i++) {
  //     setTimeout(() => {
  //       conn.write('Move: up');
  //       // conn.write('Move: left');
  //     }, i * 250);
  //   }
  // });

  // conn.on('connect', () => {
  //   let numTimes = 0;
  //   const interval = setInterval(() => {
  //     numTimes++;
  //     // conn.write('Move: up');
  //     conn.write('Move: left');
  //     if (numTimes === 10) {
  //       return clearInterval(interval);
  //     }
  //   }, 250);
  // });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};


module.exports = { connect };