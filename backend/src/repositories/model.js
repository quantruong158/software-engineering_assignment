const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true,
    },

    password :{
        type:String,
        required:true,
        minlength: 6,
    },

    adminSPSO: {
        type: Boolean,
        default : false,
    },
}, {timestamps:true} // show when it is created and updated 
);

const printSchema = new mongoose.Schema({
    brandName: {
        type: String
        //,required: true
    },
    Printer_Model: {
        type: String
        //,required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
        // ,required: true
    },
});

let Printer = mongoose.model("Printer", printSchema);
let User = mongoose.model("User", userSchema);
module.exports = { Printer, User };