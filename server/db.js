const Sequelize = require('sequelize');

const sequelize = new Sequelize('swc_app', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5000,
  logging: false,
});

module.exports = sequelize;
