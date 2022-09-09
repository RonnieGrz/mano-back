const Saving = require('../models/Saving.js');


const getTotal = () => {
    const allUsers = Saving.findAll()
    return allUsers;
}

const getUserSavings = (user) => {
    const savingsByUser = Saving.findOne({
        attributes: [se],
        where:{
            id: user.id,
            documento_asociado: user.documento,
        }
    })
    return savingsByUser;
}

const createSaving =  (user) => {
    console.log(user)
    const savingCreated = Saving.create({
        id: user.id,
        documento_asociado: user.documento,
        user_id: user.id,
        valor_pago: user.valor_pago,
        email: user.email,
    })
    return savingCreated;
}


module.exports = {
    getTotal,
    getUserSavings,
    createSaving
}
