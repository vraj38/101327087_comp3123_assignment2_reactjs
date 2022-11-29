import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const employeeSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
        maxLength: 100,
    },

    lastname:{
        type: String,
        required: true,
        maxLength: 50
    },

    email:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
    },

});

autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin, 'employee');

const employee = new mongoose.model("employee", employeeSchema);
export default employee;