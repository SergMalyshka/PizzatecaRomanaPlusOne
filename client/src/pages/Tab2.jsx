import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_PATIENT, ADD_VISIT } from '../utils/mutations';
import { QUERY_SINGLE_VISIT } from '../utils/queries';

const VisitForm = () => {
  const [notes, setNotes] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  const [updatePatient, { error }] = useMutation(UPDATE_PATIENT);
    try {
      const { data } = await updatePatient({
        variables: { _id: patientId, notes },
      });
      window.location.replace('/Rooms');
    } catch (err) {
      console.error(err);
    }
  };
//  const SingleVisit = () => {
   const visitId = "664feb1fa226c1d0c8db3869";
   // const { visitId } = useParams();
   const { loading, error, data } = useQuery(QUERY_SINGLE_VISIT,{
     variables: {id: visitId}
    });
    //  }
    
    if(loading) {
      return <div>Loading...</div>;
      }
    console.log("🚀 ~ VisitForm ~ data:", data.getOneVisit)
    const fullName = data.getOneVisit.patient.firstName + " " + data.getOneVisit.patient.lastName;


  return (
    <>
    <h2>Visit Details</h2>
    <form className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}>
     <div className="col-12 col-lg-9">
          <p>Patient Name: {fullName}</p>
          <p>Patient DOB : {data.getOneVisit.patient.dob}</p>
          <p>Visit Reason: {data.getOneVisit.reason}</p>
     </div>
     <div className="col-12 col-lg-9">
          <input
            placeholder="Notes"
            value={notes}
            className="form-input w-100"
            onChange={(event) => setNotes(event.target.value)}
          />
     </div>
     <div className="col-12 col-lg-3">
       <button className="btn btn-info btn-block py-2" type="submit">
            Save Note
       </button>
     </div>
     {error && (
      <div>
        This didn't work 😡
      </div>
     )}
    </form>
    </>
  )
 
}


export default VisitForm;