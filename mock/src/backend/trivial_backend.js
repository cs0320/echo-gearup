import * as http from 'http'
import * as util from 'util'

/**
 * This is a trivial example of a node.js backend that returns a constant value (17).
 * It is run by cd'ing to the mock directory and running "node src/trivial_backend.js"
 * 
 */

// TODO: More documentation for this file!
function handle(req , res) {
  util.inspect(req)
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);
  res.end("17");
};


const server = http.createServer(handle);
const hostname = 'localhost'
const port = 3232
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

server.on('connection', info => {
    console.log(`Connection made`);
})
