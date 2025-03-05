const express = require("express");
const multer = require("multer");
const { getRequests } = require("../controller/requestsController");
const { submitRequest } = require("../controller/submitRequestController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/donations", getRequests);

router.post(
  "/submit",
  upload.fields([{ name: "medicalEquipment" }, { name: "proofDocument" }]),
  submitRequest
);

module.exports = router;
