'use strict';

const db = require('../models/db');
const Schema = db.Messages;

async function getMessagesByTopicId(req, res) {
  try {
    const id = req.params.id;
    const data = await Schema.findAll({
      where: { TopicId: id },
      include: [
        {
          model: db.Users,
          attributes: ['username'],
        },
      ],
    });
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function postMessage(req, res) {
  try {
    const message = req.body;
    const savedMessage = await Schema.create(message);
    res.json(savedMessage);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

async function deleteMessage(req, res) {
  try {
    const id = req.params.id;
    const saved = await Schema.destroy({ where: { id: id } });
    req.body = JSON.stringify({ message: 'Message successfully deleted' });
    res.json(saved);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function editMessage(req, res) {
  try {
    const id = req.params.id;
    const message = await Schema.update(
      { body: req.body.body },
      { where: { id: id } }
    );
    res.json(message);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = {
  getMessagesByTopicId,
  postMessage,
  deleteMessage,
  editMessage,
};
