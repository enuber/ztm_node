const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'messages to friends',
    friend: 'Elon Musk',
  });
  // res.sendFile(
  //   path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
  // );
  // res.send('<ul><li>Hello Einstein</li></ul>');
}

function postMessage(req, res) {
  console.log('updating messages');
}

module.exports = {
  // getMessages: getMessages,
  // postMessage: postMessage,
  getMessages,
  postMessage,
};
