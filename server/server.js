
const express = require("express");
const { sequelize } = require("./utils/database");
const { Users } = require("./models/users");

const app = express();
const PORT = 5000;

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log("Error syncing database: ", err);
  });

app.get("/", async (req, res) => {
  try {
    const newUser = await Users.create({
      name: `John Doe`, // Fixed name
      email: `john.doe${Math.floor(Math.random() * 1000)}@example.com`, // Randomized email
      password: `password${Math.floor(Math.random() * 1000)}`, // Randomized password
      phone: `123-456-789${Math.floor(Math.random() * 10)}`, // Randomized phone number
      address: `123 Main St, City`, // Fixed address
      user_type: ["donor", "beneficiary", "admin"][
        Math.floor(Math.random() * 3)
      ], // Random user type
      verified: Math.random() > 0.5, // Random verified status
    });

    res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
