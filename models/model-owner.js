const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaOwner= new Schema({
    id:{
        type:Number,
        required:true,
        unique: true
    },
    name:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    pets:[
        {
            type:Schema.Types.ObjectId,
            ref:'pet'
        }
    ]
})

module.exports=mongoose.model('owner',SchemaOwner)