import { gql } from '@apollo/client';

export const QUERY_SINGLE_PATIENT = gql `
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

export const QUERY_SINGLE_DOCTOR = gql `
       query singleDoctor($doctorId: ID!) {
         doctor(doctorId: $doctorId){
            _id
           username
         }
       }`

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
        }
    }`