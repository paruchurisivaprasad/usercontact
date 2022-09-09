const mongoose = require("mongoose");
const { Stringify } = require("nodemon/lib/utils");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    phonenumber:{
        type:String,
        default:null
    },
    email:{
        type:String,
        required:true,
        
    },
    message:{
        type:String,
    }
    
})


module.exports=mongoose.model('user',userSchema);