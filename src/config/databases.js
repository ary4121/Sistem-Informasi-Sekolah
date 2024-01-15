// config.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', // Specify the database dialect
  host: 'localhost',    // Database host
  username: 'root',
  password: '',
  database: 'sim',
});

module.exports = sequelize;
