import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_VISIT } from '../utils/mutations';
import { QUERY_SINGLE_VISIT } from '../utils/queries';
import PatientDetails from "../components/PatientDetails";
import PreviousNotes from '../components/PreviousNotes';
import styles from './Tab2.module.css'; 

const VisitForm = () => {
  const [notes, setNotes] = useState('');
  const [updateVisit] = useMutation(UPDATE_VISIT);

  const { visitId } = useParams(); 
  const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_VISIT, {
    variables: { id: visitId } 
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateVisit({
        variables: { id: visitId, notes },
      });
      console.log("🚀 ~ handleFormSubmit ~ data:", data);
      refetch(); 
      setNotes(''); 
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading visit details</div>;
  }

  const visitData = data.getOneVisit;
  console.log(visitData);

  return (
    <>
      <form className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}>
        <PatientDetails data={visitData} /> {/* Pass patient data to PatientDetails */}
        <div className="text-center notebox">
          <textarea
            rows='10'
            placeholder="Notes"
            value={notes}
            className="form-input"
            onChange={(event) => setNotes(event.target.value)}
          />
          <button className={`${styles.btn} btn-info btn-block text-end`} type="submit">
            Save Note
          </button>
        </div>
        <div className="col-12 ">
        </div>
        {error && (
          <div>
            This didn't work 😡
          </div>
        )}
      </form>
<PreviousNotes data={visitData} />
    </>
  );
};

export default VisitForm;