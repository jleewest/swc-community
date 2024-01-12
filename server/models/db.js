const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  port: '5000',
  dialect: 'postgres',
};

const sequelize = new Sequelize('swc_app', 'postgres', 'postgres', config);

const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'db.js') {
    const modelCreatingFunc = require(path.join(__dirname, file));
    const model = modelCreatingFunc(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
