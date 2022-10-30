const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Plans = db.define('plans', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.INTEGER
    },
    gym_id: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.ENUM("0", "1"),
        defaultValue: "1",
    },
    created: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    modified: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

exports.Plans = Plans;