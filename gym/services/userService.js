const { db } = require("../config/db");
const { Sequelize } = require('sequelize');

async function getUserById(userId){
    const result = await db.query(`select * from users where status = '1' AND id =${userId}`,
    {type : Sequelize.QueryTypes.SELECT});
    return result[0] ;
}

 exports.getUserById = getUserById;