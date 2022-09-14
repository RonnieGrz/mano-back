const express = require ('express');
const router = express.Router();
const cors = require('cors');
const savingController = require('../../controllers/savingController.js');


router
    .get("/", savingController.getTotal)
    .get("/:userId", savingController.getUserSavings)
    .post("/:userId", savingController.createSaving)
    .use(cors)

module.exports = router;