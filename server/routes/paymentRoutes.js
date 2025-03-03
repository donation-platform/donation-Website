const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController');

router.post('/newPayment', paymentController.createPayment);
router.get('/', paymentController.getPayments);
router.get('/:id', paymentController.getPaymentById);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
