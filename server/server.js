const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./utils/database");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (_, callback) => {
      callback(null, true);
    },
    credentials: true,
  })
);

// 🟢 تشغيل قاعدة البيانات
sequelize
  .sync({force: true})
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database:", err));

app.use("/auth", authRoute);
app.use("/api/users", userRoutes); // إضافة المسار


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
