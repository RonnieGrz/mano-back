const express = require ('express');
const router = express.Router();
const userController = require('../../controllers/userController.js');


router
    .get("/users", userController.getAllUsers)
    .get("/users/:userId", userController.getUSer)
    .post("/users", userController.createUser)
    .patch("/users/:userId", userController.updateUser)
    .delete("/users/:userId", userController.deleteUser)

module.exports = router;