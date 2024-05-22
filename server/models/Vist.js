const {Schema} = require('mongoose');

const visitSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
});

module.exports = visitSchema