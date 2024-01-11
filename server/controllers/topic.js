'use strict';

const Schema = require('../models/topic');

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
    const topic = await Schema.findOne({ where: { id: id } });
    //add change to make
    //???
    topic.title = req.body.title;
    topic.body = req.body.body;

    await topic.save();
    req.body = topic;
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = { getTopics, postTopic, deleteTopic, editTopic };
