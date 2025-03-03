const { DataTypes } = require('sequelize');
const sequelize = require("../utils/database").sequelize;

const Payment = sequelize.define('payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  program: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PhoneNum: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phonePrefix: {
    type: DataTypes.STRING,
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nameOfCard: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numOfCard: {
    type: DataTypes.STRING,
    allowNull: false
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = { Payment };
