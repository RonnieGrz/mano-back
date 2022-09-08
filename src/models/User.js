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
    foreignKey: 'documento_asociado',
    sourceKey: 'documento',
})

saving.belongsTo(User,{
    foreignKey: 'documento_asociado',
    targetId: 'documento',
})

module.exports = User;