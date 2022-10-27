const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gym', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

 

exports.db = sequelize;