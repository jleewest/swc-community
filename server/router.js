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
router.get('/topics/:id', topicController.getTopicById);
router.post('/topics', topicController.postTopic);
router.delete('/topics/:id/delete', topicController.deleteTopic);
router.put('/topics/:id/edit', topicController.editTopic);

//MESSAGE ROUTES
router.get('/messages/:id', messageController.getMessagesByTopicId);
router.post('/messages', messageController.postMessage);
router.delete('/messages/:id/delete', messageController.deleteMessage);
router.put('/messages/:id/edit', messageController.editMessage);

router.get('/*', (_, res) => {
  res.status(404).send('RAWR! Requested resource not found 🦖\n');
});

module.exports = router;
