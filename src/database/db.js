const Sequelize = require('sequelize');

const sequelize = new Sequelize('u351161219_manoamiga', 'u351161219_adminmano', 'AdminMano01*!',{
    host: '185.239.210.52',
    dialect: 'mysql'
})

module.exports = sequelize;