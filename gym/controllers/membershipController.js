const { createMembership, deleteMembership, getMembership, getMembershipsForGym } = require("../services/membershipService");

async function createMembershipController(req, res) {
    const { user_id, plan_id } = req.body;
    const result = await createMembership(user_id, plan_id);
    res.json({
        data: result
    })
}

async function deleteMembershipController(req, res) {
    const { id } = req.params;
    const result = await deleteMembership(id);
    res.json({
        message: 'membership deleted'
    })
}

async function getMembershipController(req, res) {
    const { id } = req.params;
    const result = await getMembership(id);
    res.json({
        data: result
    });
}

async function getMembershipForGymController(req, res) {
    const { id } = req.params;
    const result = await getMembershipsForGym(id);
    if(!result) {
        return res.status(404).json({
            message: 'no membership found'
        })
    }
    res.json({
        data: result
    });
}

module.exports = {
    createMembershipController,
    deleteMembershipController,
    getMembershipController,
    getMembershipForGymController,
}