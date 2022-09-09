const express = require ('express');
const router = express.Router();
const cors = require('cors');
const savingController = require('../../controllers/savingController.js');


router
    .get("/savings", savingController.getTotal)
    .get("/savings/:userId", savingController.getUserSavings)
    .post("/savings/:userId", savingController.createSaving)
    .use(cors)

module.exports = router;