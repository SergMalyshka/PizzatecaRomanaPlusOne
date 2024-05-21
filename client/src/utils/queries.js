import { gql } from '@apollo/client';

export const QUERY_SINGLE_PATIENT = gql `
       query singlePatient($patientId: ID!) {
         patient(patientId: $patientId) {
           _id
           firstName
           lastName
           dob
           visits
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