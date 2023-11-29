#!/bin/env node

import net from 'net';

async function main() {
  const svr = net.createServer(socket => {
    socket.on('data', data => {
      console.log(socket.remoteAddress + ':' + socket.remotePort + ' => ' + data);
    });
    socket.on('close', () => {
      console.log('The connection is closed');
    });
  //}).listen(554);
  }).listen(5555);

  //console.log('0.0.0.0:554');
  console.log('0.0.0.0:5555');
}

await main();
