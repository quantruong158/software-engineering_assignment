const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },

    balance: {
        type: Number,
        default: 10,
    },
}, { timestamps: true } // show when it is created and updated 
);

const printSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    printerModel: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const fileRecord = new mongoose.Schema({
    studentID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    fileName: {
        type: String,
        required: true
    },
});
const printingHistory = new mongoose.Schema({
    studentID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    printerID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Printer",
        },
    ],
    fileName: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FileRecord",
        },
    ],
    printingStartTime: {
        type: String,
        required: true
    },
    printingEndTime: {
        type: String,
        required: true
    },
    numberOfPage: {
        type: Number,
        required: true
    }
});
let Printer = mongoose.model("Printer", printSchema);
let User = mongoose.model("User", userSchema);
let FileRecord = mongoose.model("FileRecord", fileRecord);
let FileHistory = mongoose.model("FileHistory", fileRecord);
module.exports = { Printer, User, FileHistory, FileRecord };