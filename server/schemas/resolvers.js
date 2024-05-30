
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Visit = require('../models/Visit')
const Rooms = require('../models/Rooms')
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
      return Patient.find().populate('visits')
    },
    openVisits: async (parent) => {
      return Visit.find({status: {$in: ['Waiting', 'Being Seen']}}).populate('patient')
    },
    getOneVisit: async (parent, {_id}) => {
      const getVisit = await Visit.findOne({_id:_id}).populate('patient')
      return getVisit
    },
    getRooms: async (parent, {_id}) => {
      return Rooms.findOne({ _id: _id})}
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
      return Patient.findOne({firstName: firstName, lastName: lastName, dob: dob}).populate('visits')

    },

    addDoctor: async (parent, { username, password }) => {
      const doctor = await Doctor.create({ username, password });
      const token = signToken(doctor);
      return { token, doctor };
    },

    addPatient: async (parent, {firstName, lastName, dob, visits, medicalHistory, allergies, medications}) => {
      return Patient.create({firstName, lastName, dob, visits, medicalHistory, allergies, medications})
    },

    addVisit: async (parent, {date, notes, status, severity, reason, patient, room}) => {
      const newVisit = await Visit.create({date, notes, status, severity, reason, patient, room})
      await Patient.findOneAndUpdate({_id: patient}, {$addToSet: {visits: newVisit.id}})
      return newVisit;
    },
    
    updateStatus: async(parent, {_id, status}) => {
      const updVisit = await Visit.findOneAndUpdate({_id: _id},  {status: status})
      return updVisit
    },
    
    updateVisit: async (parent, {_id, notes}) => {
      const stringNotes = notes.toString()
      const updVisit = await Visit.findOneAndUpdate
      ({_id:_id}, {$addToSet: {notes: stringNotes }})
      return updVisit;
    },

    updateRooms: async (parent, {_id, available}) => {
      const updRooms = await Rooms.findOneAndUpdate
      ({_id:_id}, {available: available})
      return updRooms;
    }
  },

}

module.exports = resolvers;
