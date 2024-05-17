const { Schema, model } = require('mongoose');
const vistSchema = require('./Vist');

const patientSchema = new Schema(
    {
        fistName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        visits: [vistSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
)

const Patient = model('Pacient', patientSchema);

module.exports = Patient