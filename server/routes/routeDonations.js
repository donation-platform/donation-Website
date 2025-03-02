const express = require("express");
const router = express.Router();
const { Requests } = require("../models/requests");


router.get("/donation-requests", async (req, res) => {
    try {
        const requests = await Requests.findAll({
            attributes: ["toolName", "medicalEquipment", "organizationName"], 
            order: [["createdAt", "DESC"]], 
        });

        res.json(requests);
    } catch (error) {
        console.error("Error fetching donation requests:", error);
        res.status(500).json({ message: "Error retrieving data" });
    }
});

module.exports = router;
