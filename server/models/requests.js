const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database").sequelize;


const Requests = sequelize.define("requests", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  organizationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  organizationAddress: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contactPerson: {
    type: DataTypes.STRING,
  },
  contactPhone: {
    type: DataTypes.STRING(20),
  },
  toolName: {
    type: DataTypes.STRING,
  },
  medicalEquipment: {
    type: DataTypes.STRING, // Store file path
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estimatedCost: {
    type: DataTypes.DECIMAL(10, 2),
  },
  proofDocument: {
    type: DataTypes.STRING, // Store file path
  },
  hasFundraisingLicense: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  agreement: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "approved", "rejected"),
    defaultValue: "pending",
  },
}, {
  timestamps: true,
  tableName: "Requests",
});
module.exports = { Requests };
