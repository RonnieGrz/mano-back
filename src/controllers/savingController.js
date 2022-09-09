const savingService = require('../services/savingService.js')

const getTotal = async(req, res) => {
    const allUsers = await savingService.getAllUsers();
    res.json(allUsers);
}

const getUserSavings = (req, res) => {
    res.send("usuario");
}

const createSaving = async(req, res) => {
    const { body } = req;

    if(!body.user_id  ||
       !body.documento_asociado ||
       !body.valor_pago ||
       !body.fecha_pago){
        return;
       }
    
    const pago = {
        id: body.id,
        user_id: body.user_id,
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