const User = require('../models/User.js');

const getAllUsers = () => {
    const allUsers = User.findAll()
    return allUsers;
}

const getUser = () => {
    return;
}

const createUser = async (newUser) => {
    await User.create({
        documento: newUser.documento,
        nombres: newUser.nombres,
        apellidos: newUser.apellidos,
        email: newUser.email,
    })
}

const updateUser = () => {
    return;
}

const deleteUser = () => {
    return;
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
