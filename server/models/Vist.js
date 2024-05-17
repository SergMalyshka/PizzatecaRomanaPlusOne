const {Schema} = require('mongoose');

const vistSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: true
    }
});

module.exports = vistSchema