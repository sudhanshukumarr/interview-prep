
const express = require('express');
const { getUser, createUserController ,putUserController, deleteUserController} = require('../controllers/userController');
const router = express.Router();


router.get('/:id',getUser)
router.post('/',createUserController)
router.put('/:id',putUserController)
 router.delete('/:id',deleteUserController)

module.exports = router;
