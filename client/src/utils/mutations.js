import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            token
             user{
                _id
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
      _id
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
  mutation addDoctor($username: String!, $password: String!) {
    addDoctor(username: $username, password:$password) {
        _id
        username
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
            _id
            visitDate
            visitNotes
        }
    }
  }
`

export const ADD_VISIT = gql`
mutation AddVisit($date: String!, $status: String!, $severity: String!, $reason: String!) {
  addVisit(date: $date, status: $status, severity: $severity, reason: $reason) {
    _id
    date
    notes
    status
    severity
    reason
  }
}`