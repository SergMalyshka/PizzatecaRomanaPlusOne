const typeDefs = `
type Patient {
    _id: ID
    firstName: String!
    lastName: String!
    dob: String!
    visits: [Visit]
    medicalHistory: String
    allergies: String
    medications: String
  }

  type Visit {
    _id: ID
    date: String!
    notes: [String]
    status: String!
    severity: String!
    reason: String!
    patient: Patient

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
    # return All Visits
    openVisits: [Visit]!
    # get one visit
    getOneVisit(_id:ID!):Visit
  }

  type Mutation {
    # mutation to add a new Doctor
    addDoctor(username: String!, password: String!): Auth
    # mutation to login
    login(username: String!, password: String!): Auth
    # mutation to add a single patient
    addPatient(firstName: String!, lastName: String!, dob: String!, medicalHistory: String!, allergies: String!, medications: String!): Patient
    # get info for one patient
    getPatient(firstName: String!, lastName: String!, dob: String!): Patient!
    # add a visit
    addVisit(date: String!, notes: [String], status: String!, severity: String!, reason: String!, patient: ID!): Visit!
    # update visit notes
    updateVisit(_id:ID!, notes:[String]!): Visit!
  }
`;

module.exports = typeDefs;
