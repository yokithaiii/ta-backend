const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Donation = sequelize.define('Donation', {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  streamerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Donation;
