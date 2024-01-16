'use strict';

const router = require('express').Router();
const userController = require('./controllers/user');
const userGroupController = require('./controllers/user-group');
const groupController = require('./controllers/group');
const topicController = require('./controllers/topic');
const messageController = require('./controllers/message');

//USER ROUTES
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserByClerkId);
router.post('/users', userController.postUser);

//GROUP ROUTES
router.get('/groups', groupController.getGroups);
router.get('/groups/:id', groupController.getGroupById);
router.post('/groups', groupController.postGroup);
router.delete('/groups/:id/delete', groupController.deleteGroup);
router.put('/groups/:id/edit', groupController.editGroup);

//USER_GROUP ROUTES
router.get('/user-group/:id', userGroupController.getGroupsByClerkId);
router.post('/user-group', userGroupController.postGroupToUser);
router.delete(
  '/user-group/:id/delete',
  userGroupController.deleteGroupFromUser
);

//TOPIC ROUTES
router.get('/topics', topicController.getTopics);
router.get('/topics/:id', topicController.getTopicsByGroupId);
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
