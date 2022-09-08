const express = require('express');
const v1UserRouter = require('./v1/routes/userRoutes.js');
const sequelize = require('./database/db.js');
const user = require('./models/User.js');
const saving = require('./models/Saving.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/", v1UserRouter);


async function main(){
    try{
        await sequelize.sync({force: false});
        app.listen(PORT);
    }
    catch(e){
        console.log(e);
    }

}

main();
