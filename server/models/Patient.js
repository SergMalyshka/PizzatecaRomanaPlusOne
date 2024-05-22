const { Schema, model } = require("mongoose");
const vistSchema = require("./Vist");

const patientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
    },
    visits: [visitSchema],
    medicalHistory: [
      {
        type: String,
        trim: true,
      },
    ],
    allergies: [
      {
        type: String,
        trim: true,
      },
    ],
    medications: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Patient = model("Patient", patientSchema);

module.exports = Patient;
