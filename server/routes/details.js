const express = require("express");
const router = express.Router();
const { getRequestById } = require("../controller/requestsController");

// Route to get request details by ID
router.get("/:id", getRequestById);

module.exports = router;