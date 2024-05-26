const PatientDetails = ({data}) => {
    const fullName = data.patient.firstName + " " + data.patient.lastName;
    return (
<div className="">
  <p>Patient name: {fullName}</p>
  <p>Patient DOB : {data.patient.dob}</p>
  <p>Visit reason: {data.reason}</p>
</div>
)
}

export default PatientDetails;