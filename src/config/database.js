const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ta-db', 'postgres', 'Password124578!', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
