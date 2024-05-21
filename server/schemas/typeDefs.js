const typeDefs = `
type Patient {
    _id: ID
    firstName: String!
    lastName: String!
    dob: String!
    visits: [Visit]
    medicalHistory: [String]
    allergies: [String]
    medicaitons: [String]
  }

  type Visit {
    _id: ID
    date: String!
    notes: String
  }

  type Doctor {
    username: String!
  }

  # required for login
  type Auth {
    token: ID!
    doctor: Doctor
  }

  type Query {
    # get all patient info
    patients: [Patient]!
    # get info for one patient
    patient(patientId: ID!):Patient
    # should allow us to check the logged in doctor when queried
    me: Doctor
  }

  type Mutation {
    # mutation to add a new Doctor
    addDoctor(username: String!, password: String!): Auth
    # mutation to login
    login(username: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
