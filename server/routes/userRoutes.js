const express = require("express");
const { getUserById } = require("../controller/userController"); // ✅ تأكد أن المسار صحيح

const router = express.Router();

// 🟢 جلب بيانات المستخدم حسب الـ ID
router.get("/:id", getUserById);

module.exports = router;
