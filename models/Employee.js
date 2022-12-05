const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true,
        maxLength: 100,
    },

    last_name:{
        type: String,
        required: true,
        maxLength: 50
    },

    email:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        // [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },

    gender:{
        type:String,
        required: true,
        enum: ['Male', 'Female', 'Other'],
        maxLength: 25,
    },

    salary:{
        type: Number,
        required: true,
    }
});

const employee = new mongoose.model("employee", employeeSchema);
module.exports = employee;


/*
{ 
    "first_name" : "Vraj",
    "last_name" : "Patel",
    "email" : "vrajpatel089@gmail.com",
    "salary" : 100000.00,
    "gender" : "Male"   
}
*/