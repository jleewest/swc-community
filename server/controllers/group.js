'use strict';

const db = require('../models/db');
const Schema = db.Groups;

async function getGroups(req, res) {
  try {
    const data = await Schema.findAll();
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getGroupById(req, res) {
  try {
    const id = req.params.id;
    const data = await Schema.findOne({ where: { id: id } });
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function postGroup(req, res) {
  try {
    const group = req.body;
    const savedGroup = await Schema.create(group);
    res.json(savedGroup);
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

async function deleteGroup(req, res) {
  try {
    const id = req.params.id;
    await Schema.destroy({ where: { id: id } });
    req.body = JSON.stringify({ message: 'Group successfully deleted' });
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function editGroup(req, res) {
  try {
    const id = req.params.id;
    const group = await Schema.findOne({ where: { id: id } });
    await group.update({
      img: req.body.img,
      title: req.body.title,
      body: req.body.body,
    });
    await group.save();
    res.json(group);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = {
  getGroups,
  getGroupById,
  postGroup,
  deleteGroup,
  editGroup,
};
