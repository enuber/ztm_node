// FOURTH FILE

const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: 'Sir Isaac Newton',
  },
  {
    id: 1,
    name: 'Albert Einstein',
  },
  {
    id: 2,
    name: 'Nikola Tesla',
  },
];

server.on('request', (req, res) => {
  let items = req.url.split('/');
  // adding POST request
  if (req.method === 'POST' && items[1] === 'friends') {
    //req is a readable stream so we can use .on()
    req.on('data', (data) => {
      const friend = data.toString();
      console.log('Request:', friend);
      friends.push(JSON.parse(friend));
    });
  } else if (
    (req.method === 'GET' && items[1] === 'friends') ||
    req.url === '/'
  ) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      const friend = friends[friendIndex];
      res.end(JSON.stringify(friend));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === 'GET' && items[1] === 'messages') {
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
