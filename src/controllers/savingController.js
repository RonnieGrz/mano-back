const savingService = require('../services/savingService.js')

const getTotal = async(req, res) => {
    const allUsers = await savingService.getAllUsers();
    res.json(allUsers);
}



const getUserSavings = async(req, res) => {
    const {params } = req;
    const userId = params.userId;
    const savingsById = await savingService.getTotalSavingsbyUser(userId)
    console.log(savingsById);
    res.json(savingsById);
}

const createSaving = async(req, res) => {
    const { body, params } = req;
    const userId = params.userId;

    if(!body.documento_asociado ||
       !body.valor_pago ||
       !body.fecha_pago){
        return;
       }
    
    const pago = {
        user_id: userId,
        documento_asociado: body.documento_asociado,
        valor_pago: body.valor_pago,
        mes_abonado: body.mes_abonado,
        fecha_pago: body.fecha_pago
    }
    
    const createdSaving = await savingService.createSaving(pago)

    res.json(createdSaving);;

}



module.exports= {
    getTotal,
    getUserSavings,
    createSaving
}