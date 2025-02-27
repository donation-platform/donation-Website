const express = require("express");
const sequelize = require("./config/database.js");
const User = require("./models/User"); // استدعاء مودل المستخدم

const app = express();

// تزامن قاعدة البيانات وإنشاء المستخدم تلقائيًا
sequelize
  .sync({ alter: true }) // يحذف الجداول القديمة ويعيد إنشائها
  .then(async () => {
    console.log("✅ Database synced successfully");

    // إضافة مستخدم جديد بعد تزامن قاعدة البيانات
    try {
      const newUser = await User.create({
        name: "Ahmad Abu Khadra",
        email: "ahmad@example.com",
        password: "hashed_password", // استخدم كلمة مرور مشفرة هنا
        phone: "0791234567",
        address: "Amman, Jordan",
        user_type: "donor",
        verified: true,
      });

      console.log("✅ User created successfully:", newUser.toJSON());
    } catch (error) {
      console.error("❌ Error creating user:", error);
    }

    // تشغيل السيرفر بعد إضافة المستخدم
    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("❌ Database sync error:", err);
  });
