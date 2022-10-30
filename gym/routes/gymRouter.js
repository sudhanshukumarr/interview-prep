
const { Router } = require('express');
const express = require('express');
const { getGyms, getGym, createGymController ,putGymController,deleteGymController} = require('../controllers/gymController');
const router = express.Router();


router.get('/',getGyms) 
router.get('/:id',getGym)
router.post('/',createGymController)
router.put('/:id',putGymController)
router.delete('/:id',deleteGymController)
module.exports = router;

