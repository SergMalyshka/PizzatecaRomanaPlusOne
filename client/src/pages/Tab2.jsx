import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_VISIT } from '../utils/mutations';
import { QUERY_SINGLE_VISIT } from '../utils/queries';
import PatientDetails from "../components/PatientDetails"
import PreviousNotes from '../components/PreviousNotes';

const VisitForm = () => {
  const [notes, setNotes] = useState('');
  const [updateVisit] = useMutation(UPDATE_VISIT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("🚀 ~ handleFormSubmit ~ notes:", notes)
      console.log("🚀 ~ handleFormSubmit ~ visitId:", visitId)
      const { data } = await updateVisit({
        variables: { id: visitId, notes },
      });
      console.log("🚀 ~ handleFormSubmit ~ data:", data)
      // window.location.replace('/');
    } catch (err) {
      console.error(err);
    }
  };

//  const SingleVisit = () => {
   const visitId = "6655eca82c2722701a99e6e2";
   // const { visitId } = useParams();
   const { loading, error, data } = useQuery(QUERY_SINGLE_VISIT,{
     variables: {id: visitId}
    });
    //  }
    
    if(loading) {
      return <div>Loading...</div>;
      }
    console.log("🚀 ~ VisitForm ~ data:", data.getOneVisit)


  return (
    <>
    <h2>Visit Details</h2>
    <form className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}>
          <PatientDetails data={data.getOneVisit} />
          <hr />
          <PreviousNotes data={data.getOneVisit} />
          <hr />
     <div className="text-center ">
          <textarea
            rows='6'
            cols='10'
            placeholder="Notes"
            value={notes}
            className="form-input w-100"
            onChange={(event) => setNotes(event.target.value)}
          />
     </div>
     <div className="col-12 ">
       <button className="btn btn-info btn-block text-end" type="submit">
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