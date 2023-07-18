const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Form = sequelize.define('form', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    isClosed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});


module.exports = Form;