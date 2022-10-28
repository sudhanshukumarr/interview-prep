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


async function createGym(name,address){
    const result =  await db.query(`INSERT INTO gym (name, address)
    values('${name}', '${address}');`,
    { type: Sequelize.QueryTypes.INSERT})
    let gymid = result[0];
    return getGymById(gymid);
    
}

 
exports.listGyms = listGyms;
exports.getGymById = getGymById;

exports.createGym = createGym;
