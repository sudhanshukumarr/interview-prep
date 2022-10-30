const { Plans } = require("../models/plan");

async function getPlans(gym_id) {
    const result = await Plans.findAll({
        where: {
            gym_id: gym_id,
            status: '1'
        }
    });
    return result;
}

async function createPlan(name, duration, price, gym_id) {
    const result = await Plans.create({
        name: name,
        duration: duration,
        price,
        gym_id,
    });
    return result;
}

async function deletePlan(id) {
    // const result = await Plans.destroy({
    //     where:{
    //         id :id
    //     }
    // })
    const result = await Plans.update({
            status: '0',
        }, {
        where: {
            id: id
        }
    })
    return true;
}

module.exports = {
    createPlan,
    getPlans,
    deletePlan,
}