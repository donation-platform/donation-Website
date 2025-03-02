require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./utils/database");
const cors = require("cors");
const authRoute = require("./routes/auth");

const requestRoutes = require("../server/routes/routeRequests")
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
.sync({ force: false })
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error syncing database:", err));

app.use("/auth", authRoute);
app.use("/api/requests", requestRoutes);
app.use("/api/users", userRoutes); // إضافة المسار


const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`App is listening on port ${PORT}`);

});
