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
  mutation addPatient($firstName: String! $lastName: String!, $dob: String!) {
    addPatient(firstName: $firstName, lastName: $lastName, dob:$dob) {
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