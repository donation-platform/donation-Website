// const express = require("express");
// const router = express.Router();
// const { getUserById, updateUser } = require("../controller/userController");

// router.get("/:id", getUserById);
// router.put("/:id", updateUser);

// module.exports = router;


const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controller/userController");
const { saveContactMessage } = require("../controller/userController");


const router = express.Router();

router.get("/profile/:userId", getUserProfile); // تأكد من أن هذا السطر موجود
router.put("/profile/:userId", updateUserProfile);
router.post("/contact", saveContactMessage); // ✅ إضافة هذا المسار


module.exports = router;
