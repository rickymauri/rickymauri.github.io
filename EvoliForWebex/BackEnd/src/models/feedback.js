const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Feedback = sequelize.define('feedback', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    understandingValue: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    complexityValue: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    explainationValue: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
});

module.exports = Feedback;