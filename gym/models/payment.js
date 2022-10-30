const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Payments = db.define('payments', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.STRING
    },
    plan_id: {
        type: DataTypes.INTEGER
    },
    amount: {
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

exports.Payments = Payments;