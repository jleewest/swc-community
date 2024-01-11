const sequelize = require('../db');
const { DataTypes } = require('sequelize');

//primary key and created_at auto generated in table, therefore not needed in schema?
//how to auto-generate created_by and topic_id?

const Schema = sequelize.define('Message', {
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  topic_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Schema;
