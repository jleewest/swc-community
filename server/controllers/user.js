'use strict';

const db = require('../models/db');
const Schema = db.Users;

async function getUsers(req, res) {
  try {
    const data = await Schema.findAll();
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getUserByClerkId(req, res) {
  try {
    const id = req.params.id;
    const data = await Schema.findOne({ where: { ClerkId: id } });
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function postUser(req, res) {
  try {
    const user = req.body;
    const clerkId = user.clerkId;
    const findUser = await Schema.findOne({ where: { clerkId: clerkId } });
    if (findUser === null) {
      const savedUser = await Schema.create(user);
      res.json(savedUser);
    }
    res.status(201);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

module.exports = { getUsers, getUserByClerkId, postUser };
