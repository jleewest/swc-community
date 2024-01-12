'use strict';

const router = require('express').Router();
const messageController = require('./controllers/message');
const topicController = require('./controllers/topic');
const userController = require('./controllers/user');

//USER ROUTES
router.get('/users', userController.getUsers);
router.post('/users', userController.postUser);

//TOPIC ROUTES
router.get('/topics', topicController.getTopics);
router.post('/topics', topicController.postTopic);
router.delete('/topics/:id', topicController.deleteTopic);
router.put('/topics/:id/edit', topicController.editTopic);

//MESSAGE ROUTES
router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.postMessage);
router.delete('/messages/:id', messageController.deleteMessage);
router.put('/messages/:id/edit', messageController.editMessage);

router.get('/*', (_, res) => {
  res.status(404).send('RAWR! Requested resource not found 🦖\n');
});

module.exports = router;
