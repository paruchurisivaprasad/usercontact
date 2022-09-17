const mongoose = require("mongoose");

const person = new mongoose.Schema({
    charge:{
        type:String,
    }
})


module.exports=mongoose.model('personal',person);
