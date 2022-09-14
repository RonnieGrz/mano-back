const sequelize = require('../database/db.js');
const Saving = require('../models/Saving.js');


const getTotalSavingsbyUser = (userId) => {
    const allSavings = Saving.findAll({
        where:{
            user_id: userId
        },
    })

    return allSavings;
}

const getUserSavingsById = (userId) => {
    const savingsByUser = Saving.findAll({
        attributes:['user_id', [sequelize.fn('sum', sequelize.col('valor_pago')), 'total_ahorros']],
        where:{
            user_id: userId
        },
        group:['documento_asociado'],

    })
    console.log(savingsByUser)
    return savingsByUser;
}

const createSaving =  (user) => {
    console.log(user)
    const savingCreated = Saving.create({
        documento_asociado: user.documento_asociado,
        user_id: user.user_id,
        mes_abonado: user.mes_abonado,
        valor_pago: user.valor_pago,
        fecha_pago: user.fecha_pago,
    })
    return savingCreated;
}


module.exports = {
    getTotalSavingsbyUser,
    getUserSavingsById,
    createSaving
}
