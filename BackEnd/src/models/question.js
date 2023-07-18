const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Question = sequelize.define('question', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numberOfLikes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
});

module.exports = Question;