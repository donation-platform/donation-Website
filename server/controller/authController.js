const { Users } = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  try {
    const existingUser = await Users.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      user_type: "donor",
      verified: false,
    });

    const token = jwt.sign(
      {
        userId: newUser.user_id,
        email: newUser.email,
        name: newUser.name,
        user_type: newUser.user_type,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log(token);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600 * 1000,
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error registering user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(409).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(409).json({ message: "Invalid credentials" });
    }
    console.log(user.user_id);

    const token = jwt.sign(
      {
        userId: user.user_id,
        email: user.email,
        name: user.name,
        user_type: user.user_type,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      userId: user.user_id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in" });
  }
};

const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });
  res.json({ message: "Logged out successfully" });
};

module.exports = { register, login, logout };
