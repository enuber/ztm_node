const express = require('express');

const app = express();

const PORT = 3000;

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

// we can use app.<method>('route', route handler function which is the callback)
app.get('/', (req, res) => {
  res.send('Hello');
});

// when we send JSON as we are with having an array of objects, we make sure express treats it like JSON.
app.get('/friends', (req, res) => {
  res.json(friends);
});

// this is how we would get a specific id from the list of friends. friendId could be anything, it is just how we will grab it from the "params"
app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  // need to validate values especially when not in control of what is there.
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    // can send just a status code but good practice to send back JSON even if it's an error.
    // res.sendStatus(404);
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
});

// app.get('/messages', (req, res) => {
//   res.send('<ul><li>Hello Einstein</li></ul>');
// });

// app.post('/messages', (req, res) => {
//   console.log('updating messages');
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
