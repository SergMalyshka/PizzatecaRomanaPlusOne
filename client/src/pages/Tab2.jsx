import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_VISIT } from '../utils/mutations';
import { QUERY_SINGLE_VISIT } from '../utils/queries';
import PatientDetails from "../components/PatientDetails";
import PreviousNotes from '../components/PreviousNotes';

const VisitForm = () => {
  const [notes, setNotes] = useState('');
  const [updateVisit] = useMutation(UPDATE_VISIT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateVisit({
        variables: { id: visitId, notes },
      });
      console.log("🚀 ~ handleFormSubmit ~ data:", data);
      // Optionally, redirect or show a success message here
    } catch (err) {
      console.error(err);
    }
  };

  const { visitId } = useParams(); // Get the visitId from the URL parameters
  console.log(visitId)
  const { loading, error, data } = useQuery(QUERY_SINGLE_VISIT, {
    variables: { id: visitId } // Use the visitId from useParams
  });

console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading visit details</div>;
  }

  const visitData = data.getOneVisit;
  // const patientData = visitData.patient;
console.log(visitData)
  return (
    <>
      <h2>Visit Details</h2>
      <form className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}>
        <PatientDetails data={visitData} /> {/* Pass patient data to PatientDetails */}
        <hr />
        <PreviousNotes data={visitData} />
        <hr />
        <div className="text-center">
          <textarea
            rows='6'
            cols='10'
            placeholder="Notes"
            value={notes}
            className="form-input w-100"
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>
        <div className="col-12">
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
  );
};

export default VisitForm;