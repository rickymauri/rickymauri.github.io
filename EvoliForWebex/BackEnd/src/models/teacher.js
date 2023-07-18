const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Teacher = sequelize.define('teacher', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Teacher;