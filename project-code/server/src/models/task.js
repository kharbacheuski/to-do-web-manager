const {sequelize} = require("../db/connect")
const { DataTypes } = require("sequelize");

const Task = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE
}, {timestamps: false});

module.exports = { Task }