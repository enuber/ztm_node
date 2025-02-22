// FIRST FILE

// The http module allows Node.js to create a web server and handle HTTP requests/responses.
const http = require('http');

// Common ports for local development: 3000, 4000, 5000.
const PORT = 3000;

// http.createServer() returns a server object that listens for requests.
// The callback function (req, res) => {} handles incoming requests and responses.
const server = http.createServer((req, res) => {
  // res.writeHead(200, { ... }) → Sends a status code (200 OK) and response headers.
  res.writeHead(200, {
    // 'Content-Type': 'text/plain',
    'Content-Type': 'application/json',
  });
  //res.end(data) → Ends the response and sends data back to the client.
  res.end(
    // Data must be stringified using JSON.stringify() if sending JSON, JSON.parse() converts back to object
    JSON.stringify({
      id: 1,
      name: 'Sir Isaac Newton',
    })
  );
});

// tell the server to listen for requests.
// our server will by default listen to our local machine. We do have a local ip like 127.0.0.1, or localhost
// need to pass in the port number to listen on. This is how to direct traffic coming in to the right server
// callback happens when our server starts to listen.
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
