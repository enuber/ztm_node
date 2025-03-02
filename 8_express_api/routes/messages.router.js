const express = require('express');

const messagesController = require('../controllers/messages.controller');

messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessage);

module.exports = messagesRouter;
