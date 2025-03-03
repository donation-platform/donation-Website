const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database").sequelize;

const Requests = sequelize.define("requests", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  organization_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  organization_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tool_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  medical_equipment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  proof_document: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_fundraising_license: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  agreement: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "pending",
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  estimated_cost: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  amount_raised: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
});

module.exports = { Requests };