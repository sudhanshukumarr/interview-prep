const express = require('express');
const { createPlanController, getPlansController, deletePlanController } = require('../controllers/planController');

const router = express.Router();

router.post('/', createPlanController)
router.get('/:id', getPlansController)
router.delete('/:id', deletePlanController)

module.exports = router;