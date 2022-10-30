const { db } = require("../config/db");
const { Sequelize } = require('sequelize');

async function getUserById(userId) {
    const result = await db.query(`select * from users where status = '1' AND id =${userId}`,
        { type: Sequelize.QueryTypes.SELECT });
    return result[0];
}
async function createUser(name, email, phone, dob) {
    try {
        const result = await db.query(`INSERT INTO USERS(name,email,phone,dob)
    values ('${name}','${email}','${phone}','${dob}');`,
            { type: Sequelize.QueryTypes.INSERT });
        return true;
    } catch (err) {
        return false;
    }

    let userid = result[0];
    console.log(result);
}

async function updateUser(id, name, email, phone, dob) {
    let result = await db.query(`UPDATE users SET name = '${name}',email='${email}',phone='${phone}',dob = '${dob}' WHERE id = ${id}`,
        { type: Sequelize.QueryTypes.UPDATE })
    return true;
}

async function deleteUser(id) {
    try {
        let user = await getUserById(id);
        if (!user) {
            return false;
        }
        await db.query(`UPDATE users SET status ='0' WHERE id = '${id}'`,
            { type: Sequelize.QueryTypes.DELETE })
        return true;
    }
    catch (err) {
        return false;
    }
}


exports.deleteUser = deleteUser;
exports.createUser = createUser;

exports.getUserById = getUserById;

exports.updateUser = updateUser;