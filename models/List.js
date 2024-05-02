const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    list: {
        type: String,
        required: true
    },
    check:{
        type: Boolean,
        require: true
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});
    module.exports = mongoose.model("List", listSchema);
