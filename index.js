const express = require('express');
const app = express();
const cors = require('cors')
//Conectar a la bd
require('./drivers/connect-db')
//setters
app.set('PORT',process.env.PORT || 3000);
app.use(express.json())
app.use(cors({origin:["*","http://localhost:2500"]}))
//middlewares
app.use("/owner",require('./routes/owner'));
app.use("/pet",require('./routes/pet'));

app.listen(app.get('PORT'),()=>console.log(`Server listen at port ${app.get('PORT')}`))
