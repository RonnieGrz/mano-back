const DataTypes  = require('sequelize');
const sequelize = require('../database/db.js')
const saving = require('./Saving.js')


const User = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    documento:{
        type: DataTypes.BIGINT,
    },
    nombres:{
        type: DataTypes.STRING,
    },
    apellidos:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    }

})

User.hasMany(saving, {
    foreignKey: 'user_id',
    sourceKey: 'id',
})

saving.belongsTo(User,{
    foreignKey: 'user_id',
    targetId: 'id',
})

module.exports = User;