const mongoose = require("mongoose");
const loginSchema = new mongoose.Schema({
    email:{
        type:String,
      
    },
    password:{
        type:String,
       
    },
});

const login = mongoose.model("Chat",loginSchema);
module.exports= login;