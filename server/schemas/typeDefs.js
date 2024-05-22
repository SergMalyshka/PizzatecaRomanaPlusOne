const typeDefs = `
type Patient {
    _id: ID
    firstName: String!
    lastName: String!
    dob: String!
    severity: String
    visits: [Visit]
    medicalHistory: [String]
    allergies: [String]
    medications: [String]
  }

  type Visit {
    _id: ID
    date: String!
    notes: String
    status String!
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
    # should allow us to check the logged in doctor when queried
    me: Doctor
  }

  type Mutation {
    # mutation to add a new Doctor
    addDoctor(username: String!, password: String!): Auth
    # mutation to login
    login(username: String!, password: String!): Auth
    # mutation to add a single patient
    addPatient(firstName: String!, lastName: String!, dob: String!, medicalHistory: String!, allergies: String!, medications: String!, severity: String!): Patient
    # get info for one patient
    getPatient(firstName: String!, lastName: String!, dob: String!): Patient!
  }
`;

module.exports = typeDefs;
