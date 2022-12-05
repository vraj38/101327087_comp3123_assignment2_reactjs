const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        maxLength: 100,
        primaryKey: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },

    password:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,        
    }
});

const here = mongoose.model("users",usersSchema);
module.exports = here;

/* 
{
    "username" : "Nandini",
    "password" : "nandini523",
    "email" : "nandini01@gmail.com"
}
*/