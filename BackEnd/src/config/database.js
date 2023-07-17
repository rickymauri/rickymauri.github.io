const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});

module.exports = sequelize;
