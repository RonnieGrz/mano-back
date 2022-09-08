const DataTypes  = require('sequelize');
const sequelize = require('../database/db.js')


const Saving = sequelize.define('ahorros',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
    },
    documento_asociado:{
        type: DataTypes.BIGINT,
    },
    valor_pago:{
        type: DataTypes.FLOAT,
    },
    mes_abonado:{
        type: DataTypes.STRING,
    },
    fecha_pago:{
        type: DataTypes.STRING,
    },
},    {
    timestamps: false,
}
    )

module.exports = Saving;