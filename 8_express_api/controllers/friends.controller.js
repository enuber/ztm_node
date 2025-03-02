const model = require('../models/friends.model');

function postFriend(req, res) {
  // return here is important because it will end this endpoint if there is an error
  if (!req.body.name) {
    return res.status(400).json({ error: 'Missing name' });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);
  // we are sending the info back as we want to be sure that something is sent back.
  res.status(201).json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  // need to validate values especially when not in control of what is there.
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    // can send just a status code but good practice to send back JSON even if it's an error.
    // res.sendStatus(404);
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
