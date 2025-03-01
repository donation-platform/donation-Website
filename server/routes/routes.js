import express from "express";
import requests from "../models/requests.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      organizationName,
      organizationAddress,
      phone,
      email,
      contactPerson,
      contactPhone,
      toolName,
      medicalEquipment, // Store file path
      quantity,
      estimatedCost,
      proofDocument, // Store file path
      hasFundraisingLicense,
      agreement,
      status 
    } = req.body;

    const newRequests = await requests.create({
      organizationName,
      organizationAddress,
      phone,
      email,
      contactPerson,
      contactPhone,
      toolName,
      medicalEquipment,
      quantity,
      estimatedCost,
      proofDocument,
      hasFundraisingLicense: hasFundraisingLicense === "yes",
      agreement: agreement === "true",
      status : 'pending',
    });

    res.status(201).json({ message: "Data saved successfully", data: newRequests });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Error saving data" });
  }
});

export default router;