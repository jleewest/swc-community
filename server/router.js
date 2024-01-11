'use strict';

const router = require('express').Router();
const topicController = require('./controllers/topic');
const messageController = require('./controllers/message');

router.get('/topics', topicController.getTopics);
router.post('/topics', topicController.postTopic);
router.delete('/topics/:id', topicController.deleteTopic);
router.put('/topics/:id/edit', topicController.editTopic);

router.get('/messages', messageController.getMessages);
router.post('/messages', messageController.postMessage);
router.delete('/messages/:id', messageController.deleteMessage);
router.put('/messages/:id/edit', messageController.editMessage);

router.get('/*', (_, res) => {
  res.status(404).send('RAWR! Requested resource not found 🦖\n');
});

module.exports = router;
