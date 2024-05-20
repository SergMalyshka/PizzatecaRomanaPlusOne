import style from './SignIn.module.css'
import { useState } from "react";

export default function SignIn() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
  const [allergies, setAllergies] = useState('')
  const [medications, setMedications] = useState('')

  const handleFormSubmit = (e) => {
  };


  const hadleImputChange = (e) => {
  };

  return (
    <div>
      <div>
        <div className={`row ${style.singleRow}`}>


          <div className={`col-5 ${style.signin}`}>
            <p className={`${style.option}`}>Sign In</p>
            <form className='form' onSubmit={handleFormSubmit}>

              <input
                value={firstName}
                name='firstName'
                onChange={hadleImputChange}
                type="text"
                placeholder="First Name"
                className={`form-control ${style.formItem}`}
              />

              <input
                value={lastName}
                name='lastName'
                onChange={hadleImputChange}
                type="text"
                placeholder="Last Name"
                className={`form-control ${style.formItem}`}
              />
              <input
                value={dob}
                name='dob'
                onChange={hadleImputChange}
                type="text"
                placeholder="Date of Birth (MM/DD/YYYY)"
                className={`form-control ${style.formItem}`}
              ></input>

              {errorMessage && (
                <div>
                  <p className={style.error}>{errorMessage}</p>
                </div>
              )}

              <button className={`btn btn-warning ${style.button}`} type="submit">
                Submit
              </button>
            </form>

          </div>

          <div className={`col-2`}>
            <div className={`row`}>
              <div className={`vr ${style.vertical}`}></div>
            </div>

            <div className={`row`}>
              <p className={`${style.or}`}>OR</p>
            </div>

            <div className={`row`}>
              <div className={`vr ${style.vertical}`}></div>
            </div>

          </div>

          <div className={`col-5 ${style.signup}`}>
            <p className={`${style.option}`}>Sign Up</p>

            <form className='form' onSubmit={handleFormSubmit}>

              <input
                value={firstName}
                name='firstName'
                onChange={hadleImputChange}
                type="text"
                placeholder="First Name"
                className={`form-control ${style.formItem}`}
              />

              <input
                value={lastName}
                name='lastName'
                onChange={hadleImputChange}
                type="text"
                placeholder="Last Name"
                className={`form-control ${style.formItem}`}
              />
              <input
                value={dob}
                name='dob'
                onChange={hadleImputChange}
                type="text"
                placeholder="Date of Birth (MM/DD/YYYY)"
                className={`form-control ${style.formItem}`}
              ></input>
              <textarea
                value={medicalHistory}
                name='medicalHistory'
                onChange={hadleImputChange}
                type="text"
                placeholder="Medical History, separated by a comma"
                className={`form-control ${style.formItem}`}
              ></textarea>
              <textarea
                value={allergies}
                name='allergies'
                onChange={hadleImputChange}
                type="text"
                placeholder="Allergies, separated by a comma"
                className={`form-control ${style.formItem}`}
              ></textarea>
              <textarea
                value={medications}
                name='medications'
                onChange={hadleImputChange}
                type="text"
                placeholder="Medications, separated by a comma"
                className={`form-control ${style.formItem}`}
              ></textarea>

              {errorMessage && (
                <div>
                  <p className={style.error}>{errorMessage}</p>
                </div>
              )}

              <button className={`btn btn-warning ${style.button}`} type="submit">
                Submit
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>
  );
}
