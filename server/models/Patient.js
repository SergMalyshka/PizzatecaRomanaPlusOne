const { Schema, model } = require("mongoose");


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
    visits: [
      {
        type: Schema.Types.ObjectId,
        ref: "Visit"
      }
    ],
    medicalHistory: 
      {
        type: String,
      },
    allergies:
      {
        type: String,
      },
    medications:
      {
        type: String,
      }
      
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Patient = model("Patient", patientSchema);

module.exports = Patient;
