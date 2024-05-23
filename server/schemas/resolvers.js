
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) =>{
      console.log(context.doctor)
      if (context.doctor) {
        return Doctor.findOne({ _id: context.doctor._id });
      }
      throw AuthenticationError
    },

    patients: async (parent) => {
<<<<<<< Updated upstream
      return Patient.find()
=======
      return Patient.find().populate('visits')
    },
    openVisits: async (parent) => {
      return Visit.find().populate('patient')
>>>>>>> Stashed changes
    }
  },

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

    getPatient: async (parent, { firstName, lastName, dob }) => {
<<<<<<< Updated upstream
      console.log(firstName, lastName, dob)
      return Patient.findOne({firstName: firstName, lastName: lastName, dob: dob})
=======
      
      return Patient.findOne({firstName: firstName, lastName: lastName, dob: dob}).populate('visits')
>>>>>>> Stashed changes
    },

    addDoctor: async (parent, { username, password }) => {
      const doctor = await Doctor.create({ username, password });
      const token = signToken(doctor);
      console.log(token);
      return { token, doctor };
    },

    addPatient: async (parent, {firstName, lastName, dob, visits, medicalHistory, allergies, medications}) => {
      return Patient.create({firstName, lastName, dob, visits, medicalHistory, allergies, medications})
<<<<<<< Updated upstream
=======
    },

    addVisit: async (parent, {date, notes, status, severity, reason, patient}) => {
      return Visit.create({date, notes, status, severity, reason, patient})
>>>>>>> Stashed changes
    }
  },

}

module.exports = resolvers;
