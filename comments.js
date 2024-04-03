// Create web server
// Create a web server that listens on the port 3000.
// When you navigate to http://localhost:3000, it should return a response with a status code of 200 and the text "This is the home page!".
// When you navigate to http://localhost:3000/comments, it should return a response with a status code of 200 and the text "This is the comments page!".

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const urlPath = url.parse(req.url).pathname;
  if (urlPath === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the home page!');
  } else if (urlPath === '/comments') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the comments page!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});