const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Membership = db.define('membership', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    plan_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "plans",
            key: "id",
        },
    },
    expiry_date: {
        type: DataTypes.DATE
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
    tableName: 'membership'
});

exports.Membership = Membership;