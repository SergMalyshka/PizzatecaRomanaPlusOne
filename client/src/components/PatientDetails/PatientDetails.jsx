import React from 'react';
import './PatientDetails.css'; // Import CSS file

const PatientDetails = ({ data }) => {
  return (
    <div>
      <div className="patient-details-container">
        <p>Patient DOB: {data.patient.dob}</p>
        <hr />
        <p>Allergies: {data.patient.allergies}</p>
        <hr />
        <p>Medications: {data.patient.medications}</p>
        <hr />
        <p>Visit Reason: {data.reason}</p>
      </div>
    </div>
  );
};

export default PatientDetails;