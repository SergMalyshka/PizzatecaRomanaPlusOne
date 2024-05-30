const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    available: {
      type: Number,
      min: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Rooms = model("Rooms", roomSchema);
module.exports = Rooms;
