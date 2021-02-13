const Sequelize = require('sequelize');

const sequelize = new Sequelize('express-sequelize', 'root', 'mysql322', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
