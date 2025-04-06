// more flexible way
const http = require('http');
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');
const { start } = require('repl');

// front end is running on port 3000 so need to run it at a different port number
const PORT = process.env.PORT || 8000;

// by passing app in here, we can organize our code more by separating the server functionality that we have here from our express code. Which will be in app.js
const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
