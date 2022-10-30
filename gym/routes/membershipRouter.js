const express = require('express');
const { 
    createMembershipController,
    getMembershipController,
    getMembershipForGymController,
    deleteMembershipController
 } = require('../controllers/membershipController');

const router = express.Router();

router.post('/', createMembershipController)
router.get('/:id', getMembershipController)
router.get('/gym/:id', getMembershipForGymController)
router.delete('/:id', deleteMembershipController)

module.exports = router;