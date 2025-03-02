const express = require("express");
const paymentRoute = express.Router();
const { addPayment } = require("../controller/paymentController");

paymentRoute.post("/newPayment", addPayment);

module.exports = paymentRoute;
