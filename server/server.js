require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./utils/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🟢 تشغيل قاعدة البيانات
sequelize
  .sync({ alter: true })
  .then(() => console.log("✅ Database synced"))
  .catch((err) => console.log("❌ Error syncing database:", err));

// 🟢 استخدام المسارات
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
