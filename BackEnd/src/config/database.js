const Sequelize = require('sequelize');

const sequelize = new Sequelize('progettoevoli', 'root', 'vivaifinley', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});

module.exports = sequelize;
