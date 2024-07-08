const Mongoose = require("mongoose");

let AddBus = new Mongoose.Schema({
    Tname: {
        type: String,
        required: true
    },
    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Stime: {
        type: String,
        required: true
    },
    Etime: {
        type: String,
        required: true
    },
    Rate: {
        type: String,
        required: true
    },
    Water: {
        type: Boolean,
        required: false,
        default: false
    },
    Ac: {
        type: Boolean,
        required: false,
        default: false
    },
    Charge: {
        type: Boolean,
        required: false,
        default: false
    },
    Cctv: {
        type: Boolean,
        required: false,
        default: false
    },
    Television: {
        type: Boolean,
        required: false,
        default: false
    }
});

let AB = Mongoose.model("addbus", AddBus);

module.exports = AB;
