
const express = require('express');
const { getGyms, getGym } = require('../controllers/gymController');
const router = express.Router();

router.get('/',getGyms) 
router.get('/:id',getGym)

module.exports = router;
