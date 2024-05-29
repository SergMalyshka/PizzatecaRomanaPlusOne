import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
             doctor {
                username
             }
        }
    }`

export const ADD_PATIENT = gql`
mutation Mutation($firstName: String!, $lastName: String!, $dob: String!, $medicalHistory: String!, $allergies: String!, $medications: String!) {
  addPatient(firstName: $firstName, lastName: $lastName, dob: $dob, medicalHistory: $medicalHistory, allergies: $allergies, medications: $medications) {
    allergies
    _id
    dob
    firstName
    lastName
    medicalHistory
    medications
    visits {
      id
    }
  }
}
`

export const PATIENT_LOOKUP = gql `
mutation GetPatient($firstName: String!, $lastName: String!, $dob: String!) {
  getPatient(firstName: $firstName, lastName: $lastName, dob: $dob) {
    _id
    firstName
    lastName
    dob
    medicalHistory
    allergies
    medications
  }
}

`

export const ADD_DOCTOR = gql`
mutation Mutation($username: String!, $password: String!) {
  addDoctor(username: $username, password: $password) {
    token
    doctor {
      username
    }
  }
}
`

export const UPDATE_PATIENT = gql`
  mutation updatePatient($firstName: String! $lastName: String!, $dob: String!) {
    updatePatient(firstName: $firstName, lastName: $lastName, dob:$dob) {
        _id
        firstName
        lastName
        dob
        medicalHistory
        allergies
        medications
        visit {
            id
            visitDate
            visitNotes
        }
    }
  }
`

export const ADD_VISIT = gql`
mutation AddVisit($date: String!, $status: String!, $severity: String!, $reason: String!, $patient: ID!) {
  addVisit(date: $date, status: $status, severity: $severity, reason: $reason, patient: $patient) {
    id
    date
    notes
    status
    severity
    reason
  }
}`

export const UPDATE_VISIT = gql`
mutation UpdateVisit($id: ID!, $notes: [String]!) {
  updateVisit(_id: $id, notes: $notes) {
    id
    notes
  }
}
`

export const UPDATE_STATUS = gql`
mutation UpdateStatus($id: ID!, $status: String!) {
  updateStatus(_id: $id, status: $status) {
    status
  }
}
`