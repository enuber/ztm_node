const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

// express is a fancy listener function for our built in Node HTTP server
const app = express();

// middleware
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
// logging middleware
app.use(morgan('combined'));

// handlesparsing any JSON coming in.
app.use(express.json());
// serve all of our public files using the path.join function.
app.use(express.static(path.join(__dirname, '..', 'public')));

// goes through express router handling planets
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

// this make sure that the / is showing what is in the public/index.html file
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
