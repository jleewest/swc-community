'use strict';

const db = require('../models/db');
const Schema = db.User_Groups;

async function getGroupsByClerkId(req, res) {
  try {
    const id = req.params.id;
    const data = await Schema.findAll({ where: { ClerkId: id } });
    res.json(data);
    res.status(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function postGroupToUser(req, res) {
  try {
    const userWithGroup = req.body;
    const saved = await Schema.create(userWithGroup);
    res.json(saved);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
}

//need to pass in group as well as user...
async function deleteGroupFromUser(req, res) {
  try {
    const userWithGroup = req.body;
    const GroupId = userWithGroup.GroupId;
    const ClerkId = userWithGroup.ClerkId;
    const saved = await Schema.destroy({
      where: { GroupId: GroupId, ClerkId: ClerkId },
    });
    req.body = JSON.stringify({
      message: 'Group successfully deleted from User',
    });
    res.json(saved);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = { getGroupsByClerkId, postGroupToUser, deleteGroupFromUser };
