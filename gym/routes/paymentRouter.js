const express = require('express');
const { getPaymentsForUserController, createPaymentController } = require('../controllers/paymentController');

const router = express.Router();

router.post('/', createPaymentController)
router.get('/user/:id', getPaymentsForUserController)

module.exports = router;