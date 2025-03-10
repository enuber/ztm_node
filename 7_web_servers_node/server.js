// SECOND FILE

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.url}`);
  if (req.url === '/friends' || req.url === '/') {
    // res.writeHead(200, {
    //   'Content-Type': 'application/json',
    // });
    // these are equivalent to the above, if you don't set statusCdoe it defaults to 200
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.end(
      JSON.stringify({
        id: 1,
        name: 'Sir Isaac Newton',
      })
    );
  } else if (req.url === '/messages') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Issac,</li>');
    res.write('<li>What are your thoughts on astronmy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
