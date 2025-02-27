const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database").sequelize;
const { Users } = require("./users");
const { Categories } = require("./categories");

const Donations = sequelize.define("donations", {
  donation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "user_id",
    },
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Categories,
      key: "category_id",
    },
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "approved", "rejected", "completed"),
    defaultValue: "pending",
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = { Donations };
