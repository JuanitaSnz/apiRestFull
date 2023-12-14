const express = require('express');
const app = express();
const cors = require('cors')

const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
//Conectar a la bd
require('./drivers/connect-db')
//setters


app.set('PORT',process.env.PORT || 3000);
app.use(express.json())
app.use(cors({origin:["*","http://localhost:2500"]}))
//middlewares
app.use("/owner",require('./routes/owner'));
app.use("/pet",require('./routes/pet'));

const options = {
    swaggerDefinition: {
        info: {
            title: 'Macotas API REST',
            version: '1.0.0',
            description: 'Documentacion sobre la API REST de Mascotas',
        },
    },
    apis: ['swagger.yaml'],
};

const swaggerUiOptions = {
    customCss: ".scheme-container {display: none}"
};

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

app.listen(app.get('PORT'),()=>console.log(`Server listen at port ${app.get('PORT')}`))
