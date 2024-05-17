const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
    toJSON: {
      virtuals: true,
    },
  }
);

const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor
