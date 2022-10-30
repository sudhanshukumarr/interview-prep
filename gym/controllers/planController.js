const { createPlan, getPlans, deletePlan } = require("../services/planService");

async function getPlansController(req,res){
    const gymId = req.params.id;
    const result = await getPlans(gymId);
    res.json({
        data : result
    })
}

async function createPlanController(req,res){
    const {name,price,duration,gym_id} = req.body;
    const result = await createPlan(name,duration,price,gym_id)
    res.json({
        data : result
    })
}

async function deletePlanController(req,res){
    const planId = req.params.id;
    const result = await deletePlan(planId);
    res.json({
        message: 'Plan deleted'
    })
}

module.exports = {
    createPlanController,
    getPlansController,
    deletePlanController,
}