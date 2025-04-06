const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

// express is a fancy listener function for our built in Node HTTP server
const app = express();

// middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
// handlesparsing any JSON coming in.
app.use(express.json());
// goes through express router handling planets
app.use(planetsRouter);

module.exports = app;
