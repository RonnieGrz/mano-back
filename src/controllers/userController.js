const userService = require('../services/userService')
const User = require('../models/User.js');

const getAllUsers = async(req, res) => {
    const allUsers = await userService.getAllUsers();
    console.log(req.body)
    res.json(allUsers);
}

const getUSer = (req, res) => {
    const user = userService.getUser();
    res.send("usuario");
}

const createUser = async(req, res) => {
    const { body } = req;

    if(!body.documento  ||
       !body.nombres ||
       !body.apellidos ||
       !body.email){
        return;
       }
    
    const createdUSer =  await User.create({
        documento: body.documento,
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
    })

    res.json(createdUSer);;

}

const updateUser = (req, res) => {
    const updatedUser = userService.updateUser();
    res.send("suído");

    res.send("Actualizar usuario ");
}

const deleteUser = (req, res) => {
    userService.deleteUser();
    res.send("Todos los usuarios");
}


module.exports= {
    getAllUsers,
    getUSer,
    createUser,
    updateUser,
    deleteUser
}