
const express = require("express");
const multer = require("multer");
const { Requests } = require("../models/requests");
const router = express.Router();
const { getRequests } = require("../controller/requestsController");
const upload = multer({ dest: 'uploads/' });

router.get("/donations", getRequests);

router.post('/submit', upload.fields([
  { name: 'medicalEquipment'},
  { name: 'proofDocument' }
]), async (req, res) => {
  try { // يجب إضافة try هنا
    const newRequest = await Requests.create({
      user_id: parseInt(req.body.user_id, 10),
      organizationName: req.body.organizationName, // ensure field names match
      organizationAddress: req.body.organizationAddress,
      phone: req.body.phone,
      email: req.body.email,
      toolName: req.body.toolName, // ensure field names match
      medicalEquipment: req.files["medicalEquipment"]
        ? req.files["medicalEquipment"][0].path
        : null,
      quantity: parseInt(req.body.quantity),
      proofDocument: req.files["proofDocument"]
        ? req.files["proofDocument"][0].path
        : null,
      hasFundraisingLicense: req.body.hasFundraisingLicense === "yes",
      agreement: req.body.agreement === "true",
      status: "pending",
      description: req.body.description,
      estimatedCost: parseFloat(req.body.estimatedCost),
      amount_raised: parseFloat(req.body.amount_raised) || 0,
    });

    res.status(201).json({
      message: "Request submitted successfully",
      request: newRequest,
    });

  } catch (error) { // يجب أن يكون catch داخل الـ async function
    console.error("Error:", error); // Add more logging to debug errors
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
