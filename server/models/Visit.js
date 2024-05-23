const {Schema, model} = require('mongoose');

const visitSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
});


const Visit = model("Visit", visitSchema);

module.exports = Visit
