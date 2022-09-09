const express = require('express');
const cors = require('cors')
const v1UserRouter = require('./v1/routes/userRoutes');
const v1SavingRouter = require('./v1/routes/savingRoutes');
const sequelize = require('./database/db.js');

const app = express();
app.use(cors());


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1", v1SavingRouter);
app.use("/api/v1", v1UserRouter);




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
