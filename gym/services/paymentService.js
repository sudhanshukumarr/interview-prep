const { Payments } = require("../models/payment")

async function createPayment(userId, planId, amount) {
    const result = await Payments.create({
        user_id : userId,
        plan_id : planId,
        amount: amount
    })
    return result;
}

async function listPayments(userId) {
    const result = await Payments.findAll({
        where : {
            user_id : userId,
            status : '1'
        }
    })
    return result;
}

module.exports = {
    createPayment,
    listPayments,
}