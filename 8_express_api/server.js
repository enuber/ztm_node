const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

// lets express know we will be using handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

// doesn't get a name, just the function to be called
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // we can do things here that happen as the flow goes back up (ie when response is coming back out)
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// can also give it a route to show page on
app.use('/site', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

// this middleware will handle our JSON. middleware order matters, we want this below the one above because that one is timing things.
// because this is built into express, we can just call it rather than have to do (req, res, next) though it can take options.
app.use(express.json());

// we can use app.<method>('route', route handler function which is the callback)
app.get('/', (req, res) => {
  // we are rendering a handlebars file
  res.render('index', { title: 'my friends', caption: "let's go skiing!" });
});

app.use('/friends/', friendsRouter);
app.use('/messages/', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
