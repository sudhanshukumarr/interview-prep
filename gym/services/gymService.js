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

async function updateGym(id,name,address){
    try {
        let result = await getGymById(id);
        if(result) {

            await db.query(`UPDATE gym SET name='${name}', address='${address}' WHERE id='${id}'`,
            {type:Sequelize.QueryTypes.UPDATE})
            return true;
        }else{
            return false;
        }
    } catch(err) {
        return false;
    }
}

async function deleteGym(id){
    try{
        let gym = await getGymById(id);
    if(!gym) {
        return false;
    }
        await db.query(`UPDATE gym SET status ='0' WHERE id = '${id}'`,
        {type:Sequelize.QueryTypes.DELETE})
        return true;
    }
    catch(err){
        return false;
    }
}
 
exports.listGyms = listGyms;
exports.getGymById = getGymById;

exports.createGym = createGym;

exports.updateGym = updateGym;

exports.deleteGym = deleteGym;