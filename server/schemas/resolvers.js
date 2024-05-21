
const Doctor = require('../models/Doctor');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {},

  Mutation: {
    login: async (parent, { username, password }) => {
      const doctor = await Doctor.findOne({ username });

      if (!doctor) {
        throw AuthenticationError;
      }

      const correctPw = await doctor.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(doctor);
      return { token, doctor };
    },

    addDoctor: async (parent, { username, password }) => {
      const doctor = await Doctor.create({ username, password });
      const token = signToken(doctor);
      console.log(token);
      return { token, doctor };
    },
  },

}

module.exports = resolvers;
