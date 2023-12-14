const mongoose = require('mongoose')

//Conexión local

const URI= "mongodb://127.0.0.1:27017/vet"

//const URI="mongodb+srv://juanita:041201@cluster0.3zobhz4.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery',false)

mongoose.connect(URI)
    .then(()=>console.log('Connect DB Success'))
    .catch(e=> console.log(e))

    module.exports=mongoose