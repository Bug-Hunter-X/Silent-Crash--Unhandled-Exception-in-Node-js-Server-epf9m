const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle requests here
    console.log('Request received');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
    // Simulate an error by accessing a non-existent property
    console.log(server.nonExistentProperty);
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});