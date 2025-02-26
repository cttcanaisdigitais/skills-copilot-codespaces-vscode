// Create web server
// Create a web server that listens on port 3000. When you visit http://localhost:3000/ in your browser, the server should respond with the following JSON object:

// {
//   "message": "This is a JSON response"
// }
// The server should respond to all requests with a status code of 200 and the following headers:

// {
//   "content-type": "application/json"
// }
// You can use the http module to create the server.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'This is a JSON response' }));
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});