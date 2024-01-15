'use strict';

const db = require('../models/db');
const Schema = db.Topics;

async function getTopics(req, res) {
  try {
    const data = await Schema.findAll();
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getTopicsByGroupId(req, res) {
  try {
    const id = req.params.id;
    const data = await Schema.findAll({ where: { GroupId: id } });
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function postTopic(req, res) {
  try {
    const topic = req.body;
    const savedTopic = await Schema.create(topic);
    res.json(savedTopic);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

async function deleteTopic(req, res) {
  try {
    const id = req.params.id;
    await Schema.destroy({ where: { id: id } });
    req.body = JSON.stringify({ message: 'Topic successfully deleted' });
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function editTopic(req, res) {
  try {
    const id = req.params.id;
    const topic = await Schema.update(
      { title: req.body.title, body: req.body.body },
      { where: { id: id } }
    );
    res.json(topic);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = {
  getTopics,
  getTopicsByGroupId,
  postTopic,
  deleteTopic,
  editTopic,
};
