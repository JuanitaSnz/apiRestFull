const mongoose = require('mongoose')

const {Schema}= mongoose

const SchemaPet= new Schema({

    id:{
        type:Number,
        required:true,
        unique:true
    },

    name:{
        type:String,
        required:true
    },

    race:{
        type:String,
        required:true
    },

    birthday:{
        type:Date,
        required:false
    },

    sex:{
        type:Boolean,
        required:true
    },

    owner:{
        type:Schema.Types.ObjectId,
        ref:'owner'
    }
})

module.exports=mongoose.model('pet',SchemaPet)