const { db } = require("../config/db");
const { Membership } = require("../models/membership");
const { Plans } = require("../models/plan");
const { Sequelize } = require('sequelize');

async function createMembership(userId, planId) {
    const plan = await Plans.findByPk(planId);
    const planDuration = plan.duration;
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + planDuration);

    const result = await Membership.create({
        user_id: userId,
        plan_id: planId,
        expiry_date: expiryDate
    })
    return result;
}

async function deleteMembership(membershipId) {
    const result = await Membership.update({
        status: '0',
    }, {
        where: {
            id: membershipId
        }
    })
    return true;
}

async function getMembership(membershipId) {
    //     const membership =  await Memberships.findOne({
    //         where : {
    //             id : membershipId,
    //             status: '1'
    //         }
    //     });
    const membership = await Membership.findByPk(membershipId, {
        where: {
            status: '1'
        }
    });
    return membership;
}

async function getMembershipsForGym(gymId) {
    const memberships = await db.query(`select membership.*
    FROM membership 
    JOIN plans
    ON membership.plan_id = plans.id
    WHERE membership.status = '1' and plans.gym_id = ${gymId};`, { type: Sequelize.QueryTypes.SELECT})
    return memberships[0];
}

module.exports = {
    createMembership,
    deleteMembership,
    getMembership,
    getMembershipsForGym,
}