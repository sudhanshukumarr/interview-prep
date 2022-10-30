const { createPayment, listPayments } = require("../services/paymentService");

async function getPaymentsForUserController(req,res){
    const userId = req.params.id;
    const result = await listPayments(userId);
    res.json({
        data : result
    })
}

async function createPaymentController(req,res){
    const {user_id,plan_id,amount} = req.body;
    const result = await createPayment(user_id, plan_id, amount)
    res.json({
        data : result
    })
}

module.exports = {
    getPaymentsForUserController,
    createPaymentController
}