import { gql } from '@apollo/client';

export const QUERY_SINGLE_VISIT = gql`
query GetOneVisit($id: ID!) {
  getOneVisit(_id: $id) {
    _id
    date
    notes
    status
    severity
    reason
    patient {
    firstName
    lastName  
    dob
    }
  }
}
`









export const QUERY_SINGLE_PATIENT = gql`
query Patient($firstName: String!, $lastName: String!, $dob: String!) {
  patient(firstName: $firstName, lastName: $lastName, dob: $dob) {
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

export const QUERY_SINGLE_DOCTOR = gql`
       query singleDoctor($doctorId: ID!) {
         doctor(doctorId: $doctorId){
            _id
           username
         }
       }`

export const QUERY_ME = gql`
query Query {
  me {
    username
  }
}`

export const QUERY_ALL_OPEN_VISITS = gql`
    query Query {
      openVisits {
        id
        date
        notes
        status
        severity
        reason
      }
    }`