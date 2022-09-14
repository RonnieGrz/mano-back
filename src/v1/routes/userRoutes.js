const express = require ('express');
const router = express.Router();
const cors = require('cors');
const userController = require('../../controllers/userController.js');


router
    .get("/", userController.getAllUsers)
    .get("/:userId", userController.getUSer)
    .post("/", userController.createUser)
    .patch("/:userId", userController.updateUser)
    .delete("/:userId", userController.deleteUser)
    .use(cors)

module.exports = router;