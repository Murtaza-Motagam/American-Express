const mongoose = require('mongoose');
const {  Schema } = mongoose;

const AccholderSchema = new Schema ({
    holdername: {
        type: String,
        required: true
    },
    aadharno: {
        type: String,
        required: true,
        unique: true
    },
    pancardno: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true,
    },
    accno: {
        type: String,
        unique: true
    },
    CRN_No: {
        type: String,
        unique: true
    },
    Mpin_No: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const Accholder = mongoose.model('accountholders', AccholderSchema);
module.exports = Accholder;