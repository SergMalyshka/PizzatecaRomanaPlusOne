import React from 'react';
import './PatientDetails.css'; // Import CSS file

const PatientDetails = ({ data }) => {
  const fullName = data.patient.firstName + " " + data.patient.lastName;
  return (
    <div>
      <div className="patient-name">{fullName}</div> {/* Patient name stands alone */}
      <div className="patient-details-container">
        <p>Patient DOB: {data.patient.dob}</p>
        <hr />
        <p>Allergies: {data.allergies}</p>
        <hr />
        <p>Medications: {data.medications}</p>
        <hr />
        <p>Visit Reason: {data.reason}</p>
      </div>
    </div>
  );
};

export default PatientDetails;