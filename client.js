/**
 * Establishes connection with the game server
 */

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    conn.write('Name: RRS');
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};


module.exports = { connect };