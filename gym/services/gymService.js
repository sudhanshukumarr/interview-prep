const { db } = require("../config/db");
const { Sequelize } = require('sequelize');

async function listGyms(){
    const result = await db.query(`select * from gym where status = '1'`,
    { type: Sequelize.QueryTypes.SELECT });
    return result;
    
}

async function getGymById(gymID){
    const result= await db.query(`select * from gym where id = ${gymID} AND status ='1'`,
    { type: Sequelize.QueryTypes.SELECT});
    return result[0];
    
}

exports.listGyms = listGyms;
exports.getGymById = getGymById;
