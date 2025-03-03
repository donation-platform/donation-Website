const express = require("express");
const adminRoute = express.Router();
const { adminLogin, adminLogout, getAllRequests, updateRequestStatus } = require("../controller/adminAuth");
const isAdmin = require("../middlewares/adminMiddleware");

// Admin login
adminRoute.post("/login", adminLogin);

// Admin logout
adminRoute.post("/logout", adminLogout);

// Admin-only routes
adminRoute.get("/", isAdmin, getAllRequests);
adminRoute.put("/:id/status", isAdmin, updateRequestStatus);

module.exports = adminRoute;