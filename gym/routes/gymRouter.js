
const express = require('express');
const { getGyms, getGym, createGymController } = require('../controllers/gymController');
const router = express.Router();


router.get('/',getGyms) 
router.get('/:id',getGym)
router.post('/',createGymController)

module.exports = router;

