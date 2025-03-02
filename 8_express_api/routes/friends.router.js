const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('ip address: ', req.ip);
  next();
});

friendsRouter.post('/', friendsController.postFriend);
// when we send JSON as we are with having an array of objects, we make sure express treats it like JSON.
friendsRouter.get('/', friendsController.getFriends);
// this is how we would get a specific id from the list of friends. friendId could be anything, it is just how we will grab it from the "params"
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
